import React from "react";
import { connect, styled, decode } from "frontity";
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    width: '80%',
    margin: 'auto'
  },
  spacer: {
    height: 100
  },
}));

const Page = ({ state, actions }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  const classes = useStyles();

  return (
    <Container>
      {/* Insert header here! */}
      Hello World!
    </Container>
  );
};

export default connect(Page);

const Container = styled.section`
  width: '100%';
  margin: 0;
  list-style: none;
`;
