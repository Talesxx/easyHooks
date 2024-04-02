import { useState, useCallback, useRef } from 'react';

type GetStateAction<S> = () => S;
type funStateAction<S> = (oldState: S) => S;

/**
 * useGetNowState
 * @param initialState 初始状态值
 * @returns[state，setState，getState]
 * @author TalesXiaoxin
 */
function useGetNowState<S>(initialState: S): [S, (funOrState: S | funStateAction<S>) => void, GetStateAction<S>];
function useGetNowState<S>(initialState?: S) {

    const [state, setState] = useState(initialState)
    const stateRef = useRef(initialState);
    const getState: GetStateAction<S | undefined> = useCallback(() => {
        return stateRef.current
    }, [])
    const setNowState = useCallback((funOrState: S | funStateAction<S>) => {
        if (typeof funOrState === "function") {
            let fun = funOrState as funStateAction<S | undefined>
            let newState = fun(getState());
            stateRef.current = newState;
            setState(newState);
            return;
        }
        let newState = funOrState as S;
        stateRef.current = newState;
        setState(newState);
    }, [])
    return [state, setNowState, getState];
}

export default useGetNowState;