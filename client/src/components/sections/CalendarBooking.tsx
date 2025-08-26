import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Video, CheckCircle, User, Building } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const CalendarBooking = () => {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const timeSlots = [
    { time: "9:00 AM", available: true },
    { time: "10:00 AM", available: true },
    { time: "11:00 AM", available: false },
    { time: "1:00 PM", available: true },
    { time: "2:00 PM", available: true },
    { time: "3:00 PM", available: false },
    { time: "4:00 PM", available: true },
  ];

  const meetingTypes = [
    {
      title: "Strategy Session",
      duration: "30 minutes",
      description: "Free consultation to discuss your Clay automation needs",
      type: "strategy",
      icon: User
    },
    {
      title: "Technical Deep Dive",
      duration: "60 minutes",
      description: "Detailed technical review of your current setup and optimization opportunities",
      type: "technical",
      icon: Building
    }
  ];

  const handleBooking = (meetingType: string) => {
    trackEvent('calendar_booking', 'engagement', meetingType);
    // Integration with Reclaim or other calendar system would go here
    window.open('https://calendly.com/clayworksofart/strategy-session', '_blank');
  };

  return (
    <section className="py-16 md:py-24" id="book-call">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="mb-4">Schedule a Call</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Book Your <span className="text-orange-500">Free Strategy Session</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Get personalized recommendations for your Clay automation project. No sales pitch - just actionable insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Meeting Types */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Choose Your Session Type</h3>
            {meetingTypes.map((meeting, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow border-orange-500/20">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-orange-500/10">
                      <meeting.icon className="h-6 w-6 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{meeting.title}</h4>
                        <Badge variant="outline" className="text-orange-600 border-orange-200">
                          {meeting.duration}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{meeting.description}</p>
                      <Button 
                        onClick={() => handleBooking(meeting.type)}
                        className="w-full"
                        data-testid={`button-book-${meeting.type}`}
                      >
                        <Calendar className="h-4 w-4 mr-2" />
                        Book {meeting.title}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* What to Expect */}
            <Card className="bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-orange-500" />
                  <span>What to Expect</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Current process audit and gap analysis</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Custom automation strategy recommendations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>ROI projections and timeline estimates</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Next steps and implementation roadmap</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Calendar Preview */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Video className="h-5 w-5 text-orange-500" />
                  <span>Available Times (EST)</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <Calendar className="h-12 w-12 text-orange-500 mx-auto mb-2" />
                    <p className="font-medium">Today - March 15, 2024</p>
                    <p className="text-sm text-muted-foreground">All sessions conducted via Google Meet</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map((slot, index) => (
                      <Button
                        key={index}
                        variant={selectedSlot === slot.time ? "default" : "outline"}
                        disabled={!slot.available}
                        onClick={() => setSelectedSlot(slot.time)}
                        className={`${
                          !slot.available ? "opacity-50 cursor-not-allowed" : ""
                        } ${
                          selectedSlot === slot.time ? "bg-orange-500 hover:bg-orange-600" : ""
                        }`}
                        data-testid={`time-slot-${slot.time.replace(/[^a-zA-Z0-9]/g, '-')}`}
                      >
                        <Clock className="h-4 w-4 mr-2" />
                        {slot.time}
                      </Button>
                    ))}
                  </div>

                  <div className="pt-4 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Duration:</span>
                      <span>30 minutes</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Meeting type:</span>
                      <span>Google Meet</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Cost:</span>
                      <span className="font-medium text-green-600">Free</span>
                    </div>
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full mt-6"
                    disabled={!selectedSlot}
                    onClick={() => handleBooking('general')}
                    data-testid="button-confirm-booking"
                  >
                    {selectedSlot ? `Confirm ${selectedSlot} Booking` : "Select a Time Slot"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Alternative */}
            <Card className="mt-6 border-slate-200">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h4 className="font-medium mb-2">Prefer Email?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Send us your questions and we'll respond within 4 hours.
                  </p>
                  <Button variant="outline" data-testid="button-email-instead">
                    Email Us Instead
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarBooking;