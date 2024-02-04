// useVisibility.jsx
import { useInView } from 'react-intersection-observer';

export default function useVisibility() {
    const [ref, inView] = useInView({
        triggerOnce: false,
    });

    const visibility = inView ? 'visible' : 'hidden';

    return [ref, visibility];
}