import { styled } from "../../pages/styles";

export const ContainerHeader = styled('header', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 2rem',
    height: '4rem',
    backgroundColor: '$gray800',
    color: '$gray100',

    h1: {
        fontSize: '1.5rem'
    },

    a: {
        color: '$gray100',
        textDecoration: 'none',
    }

})