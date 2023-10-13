import { Home } from "lucide-react"

import { Button } from "@/components/ui/button"

const HomePage = () => {
  return (
    <div className="p-10 space-y-3">
      <Button>
        <Home className="h-5 w-5 mr-2" /> Home
      </Button>
      <p>Notion Clone - HomePage</p>
    </div>
  )
}

export default HomePage
