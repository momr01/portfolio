import { sectionsItems } from "../data/sectionsItems";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {sectionsItems.map((item, index) => (
        <a
          href={`#${item.name}`}
          key={item.name + index}
          className="app__navigation-dot"
          style={active === item.name ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
