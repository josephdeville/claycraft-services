-- Add user_id column to Booking table for RLS
ALTER TABLE public.Booking 
ADD COLUMN user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;

-- Make user_id not nullable for future inserts (existing rows will need to be handled)
-- ALTER TABLE public.Booking ALTER COLUMN user_id SET NOT NULL;

-- Create RLS policies for the Booking table
CREATE POLICY "Users can view their own bookings" 
ON public.Booking 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own bookings" 
ON public.Booking 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own bookings" 
ON public.Booking 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own bookings" 
ON public.Booking 
FOR DELETE 
USING (auth.uid() = user_id);