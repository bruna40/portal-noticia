import { styled } from "..";

export const ContainerHome = styled('main', {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '0.5rem',

    padding: '2rem',

    div: {
        backgroundColor: '$gray800',
        padding: '1.5rem 1.5rem',
        borderRadius: '0.5rem',
        height: '9rem',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
        textOverflow: 'ellipsis',


        margin: '0 auto',
        width: '9rem',

    }
});