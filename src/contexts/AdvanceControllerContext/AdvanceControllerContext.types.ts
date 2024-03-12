import {
    AdvanceSections,
    DebounceSettings,
    ThrottleSettings,
} from '@/components/DebounceThrottle/components/AdvanceController/AdvanceController.types'

export interface SelectedSetting {
    sectionType: AdvanceSections
    settingType: DebounceSettings | ThrottleSettings
}

export interface DebounceStateSettings {
    [DebounceSettings.DEBOUNCE_TIME]: number | null;
    [DebounceSettings.MAX_WAIT_TIME]: number | null;
    [DebounceSettings.MAX_WAIT_CALLS]: number | null;
    [DebounceSettings.LEADING]: boolean
    [DebounceSettings.TRAILING]: boolean
}

export interface ThrottleStateSettings {
    [ThrottleSettings.THROTTLE_TIME]: number | null;
    [ThrottleSettings.MAX_WAIT_TIME]: number | null;
    [ThrottleSettings.MAX_WAIT_CALLS]: number | null;
    [ThrottleSettings.LEADING]: boolean
    [ThrottleSettings.TRAILING]: boolean
}

export interface IInitialContextState {
    visible: boolean
    selectedSetting: SelectedSetting | null
    debounceSettings: DebounceStateSettings | null
    throttleSettings: ThrottleStateSettings | null
}

export type ActionReturnType = void;
export type Action = (currentState: any, actions: IContextActions, ...rest: any[]) => ActionReturnType;
export interface IContextActions {
    [key: string]: Action
}
