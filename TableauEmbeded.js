// TableauEmbed.jsx
import React from 'react';

const TableauEmbed = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="https://public.tableau.com/views/Ganesh_17288996414190/Dashboard1?:embed=true&:showVizHome=no&:display_count=yes&:toolbar=yes"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Tableau Dashboard"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default TableauEmbed;
