import React from "react";
import { Embed, Segment, Rail } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchMovies } from "../actions/videos";

class EmbedView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { selected } = this.props;

    if (!selected) {
      this.props.fetchMovies(this.props.match.params.id);
    }

    if (!selected) {
      return <div>Not Found</div>;
    }

    return (
      <div>
        <Embed
          id="O6Xo21L0ybE"
          iframe={{
            allowFullScreen: true,
            src: `https://www.youtube.com/embed/${selected.id}`
          }}
          source="youtube"
        />
        <Segment.Group raised>
          <Segment>{selected.title}</Segment>
          <Segment size="tiny">{selected.channelTitle}</Segment>
          {selected.description && <Segment>{selected.description}</Segment>}
        </Segment.Group>
      </div>
    );
  }
}

export default connect(
  ({ videos }, ownProps) => {
    return { selected: videos[ownProps.match.params.id] };
  },
  { fetchMovies }
)(EmbedView);
