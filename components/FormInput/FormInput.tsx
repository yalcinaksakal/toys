import styles from "./FormInput.module.scss";

const FormInput: React.FC<{
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  label: string;
  name: string;
  type: string;
  value: string;
  required: boolean;
}> = ({ onChange, label, ...otherProps }) => (
  <div className={styles.group}>
    <input
      className={styles["form-input"]}
      onChange={onChange}
      {...otherProps}
    />
    {label ? (
      <label
        className={`${styles["form-input-label"]} ${
          otherProps.value.length ? styles.shrink : ""
        }`}
      >
        {label}
      </label>
    ) : null}
  </div>
);
export default FormInput;
