import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tables } from "@/integrations/supabase/types";
import { supabase } from "@/integrations/supabase/client";
import { Trophy, Crown, Award, ExternalLink, Play, Image as ImageIcon } from "lucide-react";

type Submission = Tables<"submissions">["Row"];

interface WinnersShowcaseProps {
  challengeId: string;
}

const WinnersShowcase = ({ challengeId }: WinnersShowcaseProps) => {
  const [winners, setWinners] = useState<Submission[]>([]);
  const [featuredSubmissions, setFeaturedSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWinners();
  }, [challengeId]);

  const fetchWinners = async () => {
    try {
      setLoading(true);

      // Fetch winners
      const { data: winnersData, error: winnersError } = await supabase
        .from("submissions")
        .select("*")
        .eq("challenge_id", challengeId)
        .eq("winner", true)
        .order("votes_count", { ascending: false });

      if (winnersError) throw winnersError;

      setWinners(winnersData || []);

      // Fetch featured submissions (non-winners)
      const { data: featuredData, error: featuredError } = await supabase
        .from("submissions")
        .select("*")
        .eq("challenge_id", challengeId)
        .eq("featured", true)
        .eq("winner", false)
        .order("votes_count", { ascending: false });

      if (featuredError) throw featuredError;

      setFeaturedSubmissions(featuredData || []);
    } catch (error) {
      console.error("Error fetching winners:", error);
    } finally {
      setLoading(false);
    }
  };

  const getSubmissionTypeIcon = (type: Submission["submission_type"]) => {
    switch (type) {
      case "video":
        return <Play className="h-4 w-4" />;
      case "image":
        return <ImageIcon className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const SubmissionCard = ({ submission, rank }: { submission: Submission; rank?: number }) => {
    const getRankIcon = () => {
      if (!rank) return null;
      switch (rank) {
        case 1:
          return <Crown className="h-6 w-6 text-yellow-500" />;
        case 2:
          return <Trophy className="h-6 w-6 text-gray-400" />;
        case 3:
          return <Trophy className="h-6 w-6 text-orange-600" />;
        default:
          return <Award className="h-6 w-6 text-orange-500" />;
      }
    };

    return (
      <Card className="border-orange-500/30">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-1 flex-1">
              <CardTitle className="text-lg flex items-center gap-2">
                {getRankIcon()}
                {submission.user_name}
                {rank && <Badge variant="secondary">#{rank}</Badge>}
              </CardTitle>
              {submission.user_company && (
                <CardDescription>{submission.user_company}</CardDescription>
              )}
            </div>
            <Badge variant="outline" className="flex items-center gap-1">
              {getSubmissionTypeIcon(submission.submission_type)}
              {submission.submission_type}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">{submission.description}</p>

          {submission.submission_url && (
            <Button variant="outline" size="sm" asChild className="w-full">
              <a href={submission.submission_url} target="_blank" rel="noopener noreferrer">
                View {submission.submission_type}
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}

          {submission.submission_text && (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="w-full">
                  Read Full Solution
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>{submission.user_name}'s Solution</DialogTitle>
                  <DialogDescription>{submission.user_company}</DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <p className="whitespace-pre-wrap">{submission.submission_text}</p>
                </div>
              </DialogContent>
            </Dialog>
          )}

          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4 text-orange-500" />
              <span className="text-sm font-medium">{submission.votes_count} votes</span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
        <p className="mt-4 text-muted-foreground">Loading winners...</p>
      </div>
    );
  }

  if (winners.length === 0 && featuredSubmissions.length === 0) {
    return (
      <Card>
        <CardContent className="py-12 text-center">
          <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Winners Not Yet Announced</h3>
          <p className="text-muted-foreground">
            Check back after the voting period ends to see the winners!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-8">
      {winners.length > 0 && (
        <div>
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Trophy className="h-6 w-6 text-orange-500" />
            Winners
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {winners.map((winner, index) => (
              <SubmissionCard key={winner.id} submission={winner} rank={index + 1} />
            ))}
          </div>
        </div>
      )}

      {featuredSubmissions.length > 0 && (
        <div>
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Award className="h-6 w-6 text-orange-500" />
            Featured Submissions
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredSubmissions.map((submission) => (
              <SubmissionCard key={submission.id} submission={submission} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WinnersShowcase;
