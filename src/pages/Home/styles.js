import styled from "styled-components"
import frontend from '../../assets/background.svg'

export const Container = styled.div`
    background: url("${frontend}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    min-height: 100vh;

`
export const Image = styled.img`
    margin-top: 30px;
`
export const InputLabel = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.408px;
    margin-left: 25px;
    color: #EEEEEE;
`
export const Input = styled.input`
    width: 342px;
    height: 58px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border: none;
    outline: none; 
    margin-bottom: 34px;

    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    padding-left: 25px;
    color: #FFFFFF;

`