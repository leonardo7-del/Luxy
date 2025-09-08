import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { BookOpen, Video, FileText, Link, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const resources = [
  {
    id: 1,
    title: "Khan Academy - Matemáticas",
    description: "Videos explicativos de álgebra y cálculo",
    type: "video",
    subject: "Matemáticas",
    url: "#",
    image: "https://images.unsplash.com/photo-1566314748815-2ff5db8edf2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGVkdWNhdGlvbiUyMGxpYnJhcnl8ZW58MXx8fHwxNzU3MzAxMjE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    title: "Laboratorios Virtuales de Física",
    description: "Simulaciones interactivas para experimentos",
    type: "interactive",
    subject: "Física",
    url: "#",
    image: "https://images.unsplash.com/photo-1566314748815-2ff5db8edf2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGVkdWNhdGlvbiUyMGxpYnJhcnl8ZW58MXx8fHwxNzU3MzAxMjE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    title: "Resúmenes de Historia Universal",
    description: "PDFs con eventos históricos importantes",
    type: "document",
    subject: "Historia",
    url: "#",
    image: "https://images.unsplash.com/photo-1566314748815-2ff5db8edf2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGVkdWNhdGlvbiUyMGxpYnJhcnl8ZW58MXx8fHwxNzU3MzAxMjE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 4,
    title: "Duolingo English",
    description: "Aplicación para mejorar vocabulario",
    type: "app",
    subject: "Inglés",
    url: "#",
    image: "https://images.unsplash.com/photo-1566314748815-2ff5db8edf2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGVkdWNhdGlvbiUyMGxpYnJhcnl8ZW58MXx8fHwxNzU3MzAxMjE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 5,
    title: "Biblioteca Digital",
    description: "Acceso a libros y artículos académicos",
    type: "library",
    subject: "General",
    url: "#",
    image: "https://images.unsplash.com/photo-1566314748815-2ff5db8edf2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGVkdWNhdGlvbiUyMGxpYnJhcnl8ZW58MXx8fHwxNzU3MzAxMjE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 6,
    title: "Herramientas de Estudio",
    description: "Flashcards, mapas mentales y más",
    type: "tools",
    subject: "General",
    url: "#",
    image: "https://images.unsplash.com/photo-1566314748815-2ff5db8edf2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGVkdWNhdGlvbiUyMGxpYnJhcnl8ZW58MXx8fHwxNzU3MzAxMjE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
];

const getResourceIcon = (type: string) => {
  switch (type) {
    case "video": return <Video className="h-5 w-5" />;
    case "document": return <FileText className="h-5 w-5" />;
    case "interactive": return <Link className="h-5 w-5" />;
    case "app": return <ExternalLink className="h-5 w-5" />;
    case "library": return <BookOpen className="h-5 w-5" />;
    case "tools": return <BookOpen className="h-5 w-5" />;
    default: return <BookOpen className="h-5 w-5" />;
  }
};

const getResourceTypeColor = (type: string) => {
  switch (type) {
    case "video": return "destructive";
    case "document": return "default";
    case "interactive": return "secondary";
    case "app": return "outline";
    case "library": return "default";
    case "tools": return "secondary";
    default: return "default";
  }
};

export function StudyResources() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recursos de Estudio</CardTitle>
        <CardDescription>
          Materiales y herramientas para mejorar tu aprendizaje
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map((resource) => (
            <Card key={resource.id} className="hover:shadow-md transition-shadow">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <ImageWithFallback
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h4 className="font-medium leading-tight">{resource.title}</h4>
                    {getResourceIcon(resource.type)}
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <Badge variant={getResourceTypeColor(resource.type)} className="text-xs">
                        {resource.type}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {resource.subject}
                      </Badge>
                    </div>
                  </div>
                  
                  <Button className="w-full" size="sm">
                    Acceder
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}