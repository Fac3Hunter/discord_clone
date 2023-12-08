import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const state = false; // на самом деле не нужно, просто показывает функцию cn

export default function Home() {
  return (
    <div>
      <p className="text-3xl font-bold text-indigo-500">Младенец-Этап</p>
      <Button
        variant="destructive"
        className={cn("bg-indigo-500", state && "bg-yellow-500")}
      >
        Нажми меня! :3
      </Button>
    </div>
  );
}
