const Node = ({ label, link }) => {
  return (
    <li>
        <a href={link}>{label}</a>;
    </li>
  )
};

const Nodes = ({ nodes }) => {
  return (
    <ul className="nodes">
      {nodes.map((node) => {
        return <Node key={node.id} {...node} />;
      })}
    </ul>
  );
};

export default Nodes;
