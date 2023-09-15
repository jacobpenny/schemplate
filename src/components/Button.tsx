import cn from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const classes = cn(styles.button, {
    [styles.buttonPrimary]: primary,
    [styles.buttonSecondary]: !primary,
    [styles.buttonSmall]: size === "small",
    [styles.buttonMedium]: size === "medium",
    [styles.buttonLarge]: size === "large",
  });

  return (
    <button
      type="button"
      className={classes}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
