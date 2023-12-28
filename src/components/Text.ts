import { Colors } from "@/utilities";
import styled from "styled-components";

export const Text = styled.p<{ $isOpen: boolean }>`
    display: ${(props) => props.$isOpen ? "block" : "none"};
    font-size: 1.3rem;
    padding: 20px;
    color: ${Colors.grayishPurple};
`