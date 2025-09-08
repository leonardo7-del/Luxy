import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { BookOpen, Calendar, CheckCircle, TrendingUp, Clock, Target } from "lucide-react";

const stats = [
  {
    title: "Tareas Completadas",
    value: "12",
    total: "16",
    percentage: 75,
    icon: <CheckCircle className="h-5 w-5" />,
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    title: "Promedio General",
    value: "86.2",
    unit: "%",
    trend: "+2.5%",
    icon: <TrendingUp className="h-5 w-5" />,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    title: "Horas de Estudio",
    value: "28",
    unit: "hrs",
    target: "35 hrs/semana",
    icon: <Clock className="h-5 w-5" />,
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    title: "Metas Alcanzadas",
    value: "3",
    total: "5",
    percentage: 60,
    icon: <Target className="h-5 w-5" />,
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  },
];

const upcomingEvents = [
  { title: "Examen de Matemáticas", date: "2025-09-10", time: "10:00", type: "exam" },
  { title: "Entrega de Ensayo", date: "2025-09-12", time: "23:59", type: "assignment" },
  { title: "Presentación Grupal", date: "2025-09-15", time: "14:00", type: "presentation" },
];

const recentActivity = [
  { action: "Completaste la tarea de Física", time: "hace 2 horas", type: "success" },
  { action: "Nuevo material disponible en Historia", time: "hace 4 horas", type: "info" },
  { action: "Recordatorio: Examen de Matemáticas", time: "hace 1 día", type: "warning" },
];

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="text-center py-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
        <h1>¡Bienvenido de vuelta!</h1>
        <p className="text-muted-foreground mt-2">
          Listo para continuar con tus estudios. Tienes 3 tareas pendientes y 1 examen próximo.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <div className={stat.color}>
                    {stat.icon}
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex items-baseline space-x-1">
                  <span className="text-2xl font-bold">{stat.value}</span>
                  {stat.unit && <span className="text-sm text-muted-foreground">{stat.unit}</span>}
                  {stat.total && <span className="text-sm text-muted-foreground">/ {stat.total}</span>}
                </div>
                
                <p className="text-sm text-muted-foreground mt-1">{stat.title}</p>
                
                {stat.percentage && (
                  <div className="mt-2">
                    <Progress value={stat.percentage} className="h-2" />
                  </div>
                )}
                
                {stat.trend && (
                  <div className="mt-2">
                    <Badge variant="secondary" className="text-xs">
                      {stat.trend} esta semana
                    </Badge>
                  </div>
                )}
                
                {stat.target && (
                  <p className="text-xs text-muted-foreground mt-1">Meta: {stat.target}</p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Overview Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Próximos Eventos</span>
            </CardTitle>
            <CardDescription>
              Eventos importantes en los próximos días
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted">
                <div>
                  <p className="font-medium">{event.title}</p>
                  <p className="text-sm text-muted-foreground">{event.date} - {event.time}</p>
                </div>
                <Badge variant={event.type === 'exam' ? 'destructive' : 'default'} className="text-xs">
                  {event.type}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5" />
              <span>Actividad Reciente</span>
            </CardTitle>
            <CardDescription>
              Últimas actualizaciones en tus estudios
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted">
                <div className={`p-1 rounded-full mt-1 ${
                  activity.type === 'success' ? 'bg-green-100' :
                  activity.type === 'warning' ? 'bg-yellow-100' : 'bg-blue-100'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'success' ? 'bg-green-500' :
                    activity.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                  }`} />
                </div>
                <div className="flex-1">
                  <p className="text-sm">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}