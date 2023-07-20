import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import "../styles/gitcal.scss"

const GitHubContributions = () => {
  const username = 'iadarshrawat';
  const token = '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';

  return (
    <div id='gitcal'>
      <h1>GitHub Contributions</h1>
      <GitHubCalendar
        username={username}
        blockSize={20}
        colorScheme={'light'}
        blockMargin={4}
        fontSize={20}
        blockRadius={10}
        hideColorLegend={true}
        tooltips
        tooltipDateFormat="MMM D, YYYY"
        summaryText="This is my GitHub contribution graph!"
        proxy={(url) => `/api/github-proxy?url=${url}`}
        token={token}
      />
    </div>
  );
};

export default GitHubContributions; 