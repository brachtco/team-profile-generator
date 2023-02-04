const generateHTML = (data) => {
  console.log({ data });
  return `
      <ul>
        ${Object.entries(data)
          .map(([key, value]) => `<li>${key}: ${value}</li>`)
          .join("\n")}
      </ul>
    `.trim();
};

module.exports = generateHTML;
