import { useDispatch, useSelector } from "react-redux";

/**
 * Hook personalizado para enviar acciones a Redux.
 */
export const useAppDispatch = () => useDispatch();

/**
 * Hook personalizado para acceder al estado global.
 */
export const useAppSelector = useSelector;