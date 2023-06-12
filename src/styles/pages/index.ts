import { styled } from "..";

export const ContainerHome = styled('main', {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',

    padding: '5rem',

    div: {
        backgroundColor: '$gray800',
        padding: '4rem 6rem',
        borderRadius: '0.5rem',
        

        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        overflow: 'hidden',
        textOverflow: 'ellipsis',


        margin: '0 auto',
        width: '9rem',

        h3: {
            fontSize: '1.2rem',
            fontWeight: '600',
            marginTop: '-1.5rem',
            marginBottom: '1rem',
            textAlign: 'start',
            width: '100%',
            color: 'white'
        },

        span: {
            img: {
                width: '10rem',
                height: '5rem',
                objectFit: 'cover',
            },

            p: {
                marginTop: '1rem',
                marginBottom: '1rem',
            },

            a: {
                marginTop: '2rem',
                textDecoration: 'none',
                color: '$green500',
                fontSize: '1rem',
                fontWeight: '600',
                textAlign: 'start',
            }
        }
    }
});