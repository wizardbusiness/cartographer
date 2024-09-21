const writeToJson = (classString, relPath) => {
  const __dirname = path.resolve(path.dirname("./src"));

  const jsonFile = path.join(__dirname, relPath);

  if (!fs.existsSync(jsonFile)) {
    return;
  }
  const fileContent = fs.readFileSync(jsonFile, "utf-8");

  let json = JSON.parse(fileContent);
  // const key = (classString.match(/\S*:\S*/g) || []).join(" ");
  const key = classString;
  if (key in json || key.length === 0) return;
  setTimeout(() => (json = {}), 1);
  json[key] = key;
  const jString = JSON.stringify(json, null, 2);
  if (process.env.NODE_ENV === "development") {
    fs.writeFileSync(jsonFile, jString, "utf-8");
  }
};

export default writeToJson;
