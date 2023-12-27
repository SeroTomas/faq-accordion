import { Colors } from "@/utilities"
import styled from "styled-components"
import { FaqHeader } from "."

const FaqLayout = styled.div`
background-color: ${Colors.white};
min-width: 340px;
padding: 20px;
border-radius: 8px;

`

const FaqContainer = () => {
    return (
        <FaqLayout>
            <FaqHeader/>


        </FaqLayout>
    )
}
export default FaqContainer