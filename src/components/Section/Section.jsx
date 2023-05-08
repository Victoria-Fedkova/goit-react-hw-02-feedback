import PropTypes from 'prop-types';
import { SectionWrapper, Title } from './Section.styled';

function Section({ title, children }) {
  return (
    <SectionWrapper>
      {title && <Title>{title}</Title>}
      {children}
    </SectionWrapper>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
