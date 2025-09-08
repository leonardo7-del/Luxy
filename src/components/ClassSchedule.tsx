import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const schedule = [
  {
    day: "Lunes",
    classes: [
      { time: "08:00 - 09:30", subject: "Matemáticas", teacher: "Prof. García", room: "Aula 101" },
      { time: "10:00 - 11:30", subject: "Física", teacher: "Prof. Rodríguez", room: "Lab 201" },
      { time: "14:00 - 15:30", subject: "Historia", teacher: "Prof. Martínez", room: "Aula 205" },
    ]
  },
  {
    day: "Martes",
    classes: [
      { time: "08:00 - 09:30", subject: "Inglés", teacher: "Prof. Johnson", room: "Aula 103" },
      { time: "10:00 - 11:30", subject: "Matemáticas", teacher: "Prof. García", room: "Aula 101" },
      { time: "14:00 - 15:30", subject: "Física", teacher: "Prof. Rodríguez", room: "Lab 201" },
    ]
  },
  {
    day: "Miércoles",
    classes: [
      { time: "08:00 - 09:30", subject: "Historia", teacher: "Prof. Martínez", room: "Aula 205" },
      { time: "10:00 - 11:30", subject: "Inglés", teacher: "Prof. Johnson", room: "Aula 103" },
      { time: "14:00 - 15:30", subject: "Matemáticas", teacher: "Prof. García", room: "Aula 101" },
    ]
  },
  {
    day: "Jueves",
    classes: [
      { time: "08:00 - 09:30", subject: "Física", teacher: "Prof. Rodríguez", room: "Lab 201" },
      { time: "10:00 - 11:30", subject: "Historia", teacher: "Prof. Martínez", room: "Aula 205" },
      { time: "14:00 - 15:30", subject: "Inglés", teacher: "Prof. Johnson", room: "Aula 103" },
    ]
  },
  {
    day: "Viernes",
    classes: [
      { time: "08:00 - 09:30", subject: "Matemáticas", teacher: "Prof. García", room: "Aula 101" },
      { time: "10:00 - 11:30", subject: "Física", teacher: "Prof. Rodríguez", room: "Lab 201" },
    ]
  },
];

const getSubjectColor = (subject: string) => {
  const colors: { [key: string]: string } = {
    "Matemáticas": "bg-blue-100 text-blue-800",
    "Física": "bg-green-100 text-green-800",
    "Historia": "bg-purple-100 text-purple-800",
    "Inglés": "bg-orange-100 text-orange-800",
  };
  return colors[subject] || "bg-gray-100 text-gray-800";
};

export function ClassSchedule() {
  const currentTime = new Date();
  const currentDay = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"][currentTime.getDay()];
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Horario de Clases</CardTitle>
        <CardDescription>
          Tu cronograma semanal de materias
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {schedule.map((daySchedule, index) => (
            <div key={index} className={`space-y-3 ${daySchedule.day === currentDay ? 'bg-accent p-4 rounded-lg' : ''}`}>
              <div className="flex items-center space-x-2">
                <h3 className="font-medium">{daySchedule.day}</h3>
                {daySchedule.day === currentDay && (
                  <Badge variant="default" className="text-xs">Hoy</Badge>
                )}
              </div>
              
              <div className="space-y-2">
                {daySchedule.classes.map((classItem, classIndex) => (
                  <div key={classIndex} className="flex items-center justify-between p-3 rounded-lg border bg-card">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${getSubjectColor(classItem.subject)}`}>
                          {classItem.subject}
                        </span>
                        <span className="text-sm font-medium">{classItem.time}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {classItem.teacher} • {classItem.room}
                      </div>
                    </div>
                  </div>
                ))}
                
                {daySchedule.classes.length === 0 && (
                  <p className="text-sm text-muted-foreground italic">Sin clases programadas</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}