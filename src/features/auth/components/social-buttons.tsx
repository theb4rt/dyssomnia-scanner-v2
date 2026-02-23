import { Chrome, Github, Twitter } from "lucide-react"
import { Button } from "@/shared/components/ui/button"

export function SocialButtons() {
  return (
    <div className="grid grid-cols-3 gap-3">
      <Button variant="outline" className="w-full">
        <Chrome className="h-4 w-4" />
        <span className="sr-only">Google</span>
      </Button>
      <Button variant="outline" className="w-full">
        <Twitter className="h-4 w-4" />
        <span className="sr-only">Twitter</span>
      </Button>
      <Button variant="outline" className="w-full">
        <Github className="h-4 w-4" />
        <span className="sr-only">GitHub</span>
      </Button>
    </div>
  )
}
