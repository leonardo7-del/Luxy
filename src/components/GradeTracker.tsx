import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";

const subjects = [
  {
    name: "Matemáticas",
    currentGrade: 85,
    targetGrade: 90,
    assignments: [
      { name: "Examen 1", grade: 88, weight: 30 },
      { name: "Tarea 1", grade: 92, weight: 20 },
      { name: "Proyecto", grade: 78, weight: 25 },
      { name: "Participación", grade: 95, weight: 25 },
    ]
  },
  {
    name: "Física",
    currentGrade: 78,
    targetGrade: 85,
    assignments: [
      { name: "Laboratorio 1", grade: 85, weight: 40 },
      { name: "Examen 1", grade: 72, weight: 35 },
      { name: "Tareas", grade: 88, weight: 25 },
    ]
  },
  {
    name: "Historia",
    currentGrade: 92,
    targetGrade: 95,
    assignments: [
      { name: "Ensayo 1", grade: 95, weight: 40 },
      { name: "Examen 1", grade: 88, weight: 30 },
      { name: "Participación", grade: 96, weight: 30 },
    ]
  },
  {
    name: "Inglés",
    currentGrade: 89,
    targetGrade: 92,
    assignments: [
      { name: "Comprensión", grade: 91, weight: 35 },
      { name: "Escritura", grade: 87, weight: 35 },
      { name: "Vocabulario", grade: 92, weight: 30 },
    ]
  },
];

export function GradeTracker() {
  const overallAverage = subjects.reduce((sum, subject) => sum + subject.currentGrade, 0) / subjects.length;

  const getGradeColor = (grade: number) => {
    if (grade >= 90) return "text-green-600";
    if (grade >= 80) return "text-yellow-600";
    return "text-red-600";
  };

  const getProgressColor = (current: number, target: number) => {
    const percentage = (current / target) * 100;
    if (percentage >= 95) return "bg-green-500";
    if (percentage >= 85) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Seguimiento de Calificaciones</CardTitle>
        <CardDescription>
          Monitorea tu progreso académico en todas las materias
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center p-4 bg-muted rounded-lg">
          <h3>Promedio General</h3>
          <p className={`text-3xl font-bold ${getGradeColor(overallAverage)}`}>
            {overallAverage.toFixed(1)}%
          </p>
        </div>

        <div className="grid gap-4">
          {subjects.map((subject, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">{subject.name}</h4>
                    <div className="flex items-center space-x-2">
                      <span className={`font-bold ${getGradeColor(subject.currentGrade)}`}>
                        {subject.currentGrade}%
                      </span>
                      <Badge variant="outline" className="text-xs">
                        Meta: {subject.targetGrade}%
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Progreso hacia la meta</span>
                      <span>{subject.currentGrade}/{subject.targetGrade}%</span>
                    </div>
                    <Progress 
                      value={(subject.currentGrade / subject.targetGrade) * 100} 
                      className="h-2"
                    />
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Calificaciones detalladas:</p>
                    {subject.assignments.map((assignment, assignmentIndex) => (
                      <div key={assignmentIndex} className="flex justify-between items-center text-sm">
                        <span>{assignment.name} ({assignment.weight}%)</span>
                        <span className={getGradeColor(assignment.grade)}>
                          {assignment.grade}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}