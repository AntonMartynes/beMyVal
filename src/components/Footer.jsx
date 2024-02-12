/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import '../styles/footer.scss';

export const Footer = ({isVisible}) => {
  return (
    <footer className="footer">
      {isVisible ? (
        <div>
          Write to me on February 14 with the secret pharase ' cinnamon roll '
          and get a small surprise
        </div>
      ) : (
        <div>
          Make the right choise 
        </div>
      )}
    </footer>
  );
};
