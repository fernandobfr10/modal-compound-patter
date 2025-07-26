// Demo Header
import { DemoHeader } from "../DemoHeader"

// Component UI
import { Text } from "../../components/text"

export const DemoText = () => {
  return (
    <div className="demo">
      <DemoHeader title="Text Component" />
      <div className="demo-list">
        <Text as="p">Paragraph</Text>
      </div>
    </div>
  )
}