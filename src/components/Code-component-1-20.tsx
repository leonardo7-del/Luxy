import { Calendar } from "./ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { useState } from "react";

const events = [
  { date: "2025-09-10", title: "Examen de Matemáticas", type: "exam" },
  { date: "2025-09-12", title: "Entrega de Ensayo", type: "assignment" },
  { date: "2025-09-15", title: "Presentación Grupal", type: "presentation" },
  { date: "2025-09-18", title: "Proyecto Final", type: "project" },
];

export function StudyCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "exam": return "destructive";
      case "assignment": return "default";
      case "presentation": return "secondary";
      case "project": return "outline";
      default: return "default";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Calendario de Estudios</CardTitle>
        <CardDescription>
          Planifica tus exámenes, tareas y proyectos
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
        
        <div className="space-y-3">
          <h4>Próximos Eventos</h4>
          {events.map((event, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted">
              <div>
                <p className="font-medium">{event.title}</p>
                <p className="text-sm text-muted-foreground">{event.date}</p>
              </div>
              <Badge variant={getEventTypeColor(event.type)}>
                {event.type}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}