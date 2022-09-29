import styled from '@emotion/styled';

export const List = styled.ul`
display: flex;
width: 400px;
margin: 0 auto;
justify-content: space-around;
padding: 0;
`;

export const Item = styled.li`
button {
    background-color: white;
    border: 2px solid rgb(31, 81, 255);
    border-radius: 4px;
    width: 60px;
    height: 30px;
    cursor: pointer;
    &:hover {
    background-color: rgb(0, 255, 255);
    }
}
`;