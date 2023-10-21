import { Controller, Control, FieldErrors, FieldValues } from 'react-hook-form';

type Props = {
    name: string;
    control: Control<any, object>;
    errorField: FieldErrors<FieldValues>;
    placeholder?: string;
    maxLength?: number;
};

const Input = ({ name, control, errorField, maxLength, placeholder = '' }: Props) => {
    return (
        <>
            <div className="">
                <Controller
                    name={name}
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <input
                            className=""
                            value={value}
                            onBlur={onBlur}
                            onChange={onChange}
                            maxLength={maxLength}
                            placeholder={placeholder}
                        />
                    )}
                />
            </div>
            {errorField[name] && <p className="">{String(errorField[name]?.message)}</p>}
        </>
    );
};

export default Input;
