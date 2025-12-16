import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Calendar, Users, TrendingUp, Award } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";
import SubmissionForm from "@/components/challenges/SubmissionForm";
import SubmissionGallery from "@/components/challenges/SubmissionGallery";
import WinnersShowcase from "@/components/challenges/WinnersShowcase";
import { useToast } from "@/hooks/use-toast";

type Challenge = Tables<"challenges">["Row"];
type Submission = Tables<"submissions">["Row"];

const Challenges = () => {
  const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(null);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchActiveChallenge();
  }, []);

  const fetchActiveChallenge = async () => {
    try {
      setLoading(true);

      // Fetch active or voting challenge
      const { data: challengeData, error: challengeError } = await supabase
        .from("challenges")
        .select("*")
        .in("status", ["active", "voting"])
        .order("start_date", { ascending: false })
        .limit(1)
        .single();

      if (challengeError) {
        console.error("Error fetching challenge:", challengeError);
        return;
      }

      setActiveChallenge(challengeData);

      if (challengeData) {
        // Fetch submissions for this challenge
        const { data: submissionsData, error: submissionsError } = await supabase
          .from("submissions")
          .select("*")
          .eq("challenge_id", challengeData.id)
          .order("votes_count", { ascending: false });

        if (submissionsError) {
          console.error("Error fetching submissions:", submissionsError);
        } else {
          setSubmissions(submissionsData || []);
        }
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Failed to load challenge data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmissionSuccess = () => {
    fetchActiveChallenge();
    toast({
      title: "Success!",
      description: "Your submission has been received. Good luck!",
    });
  };

  const handleVoteSuccess = () => {
    fetchActiveChallenge();
  };

  const getStatusBadge = (status: Challenge["status"]) => {
    const statusConfig = {
      active: { label: "Active", variant: "default" as const },
      voting: { label: "Voting Open", variant: "secondary" as const },
      completed: { label: "Completed", variant: "outline" as const },
      draft: { label: "Coming Soon", variant: "outline" as const },
    };

    const config = statusConfig[status];
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading challenges...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-500/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-4">
              <Trophy className="h-8 w-8 text-orange-500" />
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                GTM Show & Solve
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mt-4">
              Weekly challenges to showcase your GTM engineering skills. Share your solutions,
              learn from the community, and win exclusive prizes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-orange-500" />
                <span className="text-sm">New challenge every Monday</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-orange-500" />
                <span className="text-sm">Community voting</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-orange-500" />
                <span className="text-sm">Exclusive rewards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          {activeChallenge ? (
            <div className="space-y-8">
              {/* Current Challenge Card */}
              <Card className="border-orange-500/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-2xl md:text-3xl">{activeChallenge.title}</CardTitle>
                      <CardDescription className="text-base">
                        {activeChallenge.description}
                      </CardDescription>
                    </div>
                    {getStatusBadge(activeChallenge.status)}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="prose prose-sm max-w-none">
                    <p className="text-foreground/90">{activeChallenge.prompt}</p>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Submission deadline:</span>
                      <span className="ml-2 font-medium">
                        {new Date(activeChallenge.end_date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Hashtag:</span>
                      <Badge variant="outline" className="ml-2">
                        {activeChallenge.hashtag}
                      </Badge>
                    </div>
                    {activeChallenge.prize_description && (
                      <div className="w-full">
                        <span className="text-muted-foreground">Prize:</span>
                        <span className="ml-2 font-medium text-orange-500">
                          {activeChallenge.prize_description}
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Tabs for Submit and View Submissions */}
              <Tabs defaultValue="submit" className="w-full">
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
                  <TabsTrigger value="submit">Submit Solution</TabsTrigger>
                  <TabsTrigger value="gallery">
                    Gallery ({submissions.length})
                  </TabsTrigger>
                  <TabsTrigger value="winners">Winners</TabsTrigger>
                </TabsList>

                <TabsContent value="submit" className="mt-6">
                  {activeChallenge.status === "active" ? (
                    <SubmissionForm
                      challengeId={activeChallenge.id}
                      hashtag={activeChallenge.hashtag}
                      onSuccess={handleSubmissionSuccess}
                    />
                  ) : (
                    <Card>
                      <CardContent className="py-12 text-center">
                        <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Voting Period</h3>
                        <p className="text-muted-foreground">
                          Submissions are now closed. Vote for your favorite solutions in the Gallery tab!
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>

                <TabsContent value="gallery" className="mt-6">
                  <SubmissionGallery
                    submissions={submissions}
                    challengeStatus={activeChallenge.status}
                    onVoteSuccess={handleVoteSuccess}
                  />
                </TabsContent>

                <TabsContent value="winners" className="mt-6">
                  <WinnersShowcase challengeId={activeChallenge.id} />
                </TabsContent>
              </Tabs>
            </div>
          ) : (
            <Card>
              <CardContent className="py-16 text-center">
                <Trophy className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h2 className="text-2xl font-semibold mb-2">No Active Challenge</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Check back Monday for our next GTM Show & Solve challenge! Follow us on LinkedIn
                  to get notified when new challenges are posted.
                </p>
                <Button className="mt-6" variant="outline">
                  Follow on LinkedIn
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
};

export default Challenges;
