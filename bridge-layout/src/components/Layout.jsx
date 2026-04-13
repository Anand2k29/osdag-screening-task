import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

const Layout = () => {
  return (
    <div className="w-full h-screen bg-dark-bg flex overflow-hidden font-sans">
      <LeftPanel />
      <RightPanel />
    </div>
  );
};

export default Layout;
