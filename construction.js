let buildConstruct = (name, material, assemble, duration) => ({
  name,
  material,
  assemble,
  duration,
});

let construct = (name) => buildConstruct(name, "human", true, 1000);
