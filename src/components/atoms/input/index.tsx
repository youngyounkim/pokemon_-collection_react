import { memo } from 'react';
import { Controller, Control, FieldErrors, FieldValues } from 'react-hook-form';

type Props = {
    name: string;
    control: Control<any, object>;
    errorField: FieldErrors<FieldValues>;
    placeholder?: string;
    maxLength?: number;
    onFocus?: () => void;
};

const Input = ({ name, control, errorField, maxLength, placeholder = '', onFocus }: Props) => {
    return (
        <>
            <div className="p-2 border border-slate-200 ">
                <Controller
                    name={name}
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <input
                            className="w-full"
                            value={value}
                            onBlur={onBlur}
                            onChange={onChange}
                            maxLength={maxLength}
                            placeholder={placeholder}
                            onFocus={onFocus}
                        />
                    )}
                />
            </div>
            {errorField[name] && <p className="">{String(errorField[name]?.message)}</p>}
        </>
    );
};

export default memo(Input);
