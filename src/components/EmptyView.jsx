export default function EmptyView() {
  return (
    <section className="empty-view">
      <h3>Empty Packing List</h3>
      {/*using js string in jsx bcs of ' */}
      <p>Start by adding some items you {"don't"} want to forget</p>
    </section>
  );
}
