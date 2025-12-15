export interface ContentUploadPayload {
  title: string;
  content: string;
  contentType: 'blog' | 'case-study' | 'landing-page' | 'email';
  metadata?: Record<string, string>;
}

export interface WorkflowExecutePayload {
  appId: number | string;
  version?: number;
  inputs: Record<string, unknown>;
}

interface AirOpsCredentials {
  apiKey: string;
  workspaceId: string;
}

function getCredentials(): AirOpsCredentials {
  const apiKey = process.env.AIROPS_API_KEY;
  const workspaceId = process.env.AIROPS_WORKSPACE_ID;
  
  if (!apiKey || !workspaceId) {
    throw new Error('AirOps credentials not configured. Please set AIROPS_API_KEY and AIROPS_WORKSPACE_ID.');
  }
  
  return { apiKey, workspaceId };
}

export async function executeAirOpsWorkflow(payload: WorkflowExecutePayload) {
  const { apiKey } = getCredentials();
  
  const url = `https://app.airops.com/public_api/airops_apps/${payload.appId}/execute`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        inputs: payload.inputs,
        version: payload.version
      })
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`AirOps API error (${response.status}): ${errorText}`);
    }
    
    const result = await response.json();
    
    return {
      success: true,
      executionId: result.id,
      status: result.status,
      output: result.output,
      executedAt: new Date().toISOString()
    };
  } catch (error) {
    console.error('AirOps workflow execution error:', error);
    throw error;
  }
}

export async function executeAirOpsWorkflowAsync(payload: WorkflowExecutePayload) {
  const { apiKey } = getCredentials();
  
  const url = `https://app.airops.com/public_api/airops_apps/${payload.appId}/webhook_async_execute?auth_token=${apiKey}`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload.inputs)
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`AirOps async API error (${response.status}): ${errorText}`);
    }
    
    return {
      success: true,
      message: 'Workflow execution started asynchronously',
      triggeredAt: new Date().toISOString()
    };
  } catch (error) {
    console.error('AirOps async execution error:', error);
    throw error;
  }
}

export async function uploadToAirOpsKnowledgeBase(
  memoryStoreId: string,
  document: {
    text: string;
    name: string;
    metadata?: Record<string, string>;
  }
) {
  const { apiKey } = getCredentials();
  
  const url = `https://api.airops.com/public_api/vector_stores/${memoryStoreId}/vector_store_documents`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(document)
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`AirOps Knowledge Base error (${response.status}): ${errorText}`);
    }
    
    const result = await response.json();
    
    return {
      success: true,
      documentId: result.id,
      name: result.name,
      status: result.status,
      uploadedAt: new Date().toISOString()
    };
  } catch (error) {
    console.error('AirOps knowledge base upload error:', error);
    throw error;
  }
}
