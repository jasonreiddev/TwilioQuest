class Materializer {
  constructor(targetName) {
    this.target = targetName;
  }
  target;
  activated = false;

  activate = () => (this.activated = true);
  materialize = () => (this.activated ? this.target : undefined);
}

const m = new Materializer("Kevin");
console.log(m.activated); // would print "false"

m.activate();
console.log(m.activated); // would print "true"

console.log(m.materialize()); // would print "Kevin"
