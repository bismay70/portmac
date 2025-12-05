import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer'; 
import {locations} from "#constants"
const DEFAULT_LOCATION = locations.work;

const useLocationStore = create(
    immer((set) => ({
        location: DEFAULT_LOCATION,
        setLocation: (location=null) => 
            set((state) => {
            state.location = location;
        }),
        resetActiveLocation: () => 
            set((state) => {
            state.location = DEFAULT_LOCATION;
        }),
    }))
)

export default useLocationStore