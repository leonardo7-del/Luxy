import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";

interface Task {
  id: number;
  title: string;
  subject: string;
  dueDate: string;
  priority: "alta" | "media" | "baja";
  completed: boolean;
}

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Leer capítulos 5-7 de Física",
    subject: "Física",
    dueDate: "2025-09-10",
    priority: "alta",
    completed: false,
  },
  {
    id: 2,
    title: "Resolver ejercicios de Cálculo",
    subject: "Matemáticas",
    dueDate: "2025-09-12",
    priority: "media",
    completed: true,
  },
  {
    id: 3,
    title: "Escribir ensayo de Historia",
    subject: "Historia",
    dueDate: "2025-09-15",
    priority: "alta",
    completed: false,
  },
  {
    id: 4,
    title: "Estudiar vocabulario de Inglés",
    subject: "Inglés",
    dueDate: "2025-09-08",
    priority: "baja",
    completed: false,
  },
];

export function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const progressPercentage = (completedTasks / tasks.length) * 100;

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "alta": return "destructive";
      case "media": return "default";
      case "baja": return "secondary";
      default: return "default";
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Gestión de Tareas</CardTitle>
            <CardDescription>
              Organiza y realiza seguimiento de tus tareas académicas
            </CardDescription>
          </div>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Nueva Tarea
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progreso general</span>
            <span>{completedTasks}/{tasks.length} tareas</span>
          </div>
          <Progress value={progressPercentage} />
        </div>

        <div className="space-y-3">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center space-x-3 p-3 rounded-lg border">
              <Checkbox
                checked={task.completed}
                onCheckedChange={() => toggleTask(task.id)}
              />
              <div className="flex-1 space-y-1">
                <div className="flex items-center space-x-2">
                  <p className={`font-medium ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                    {task.title}
                  </p>
                  <Badge variant={getPriorityColor(task.priority)} className="text-xs">
                    {task.priority}
                  </Badge>
                </div>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span>{task.subject}</span>
                  <span>Vence: {task.dueDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}