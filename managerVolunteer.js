document.addEventListener("DOMContentLoaded", function (event) {
  const lutinsLogo = document.getElementById("lutinsLogo");
  const dsdLogo = document.getElementById("dsdLogo");
  const avriLogo = document.getElementById("avriLogo");
  const assoDescription = document.getElementById("assoDescription");

  lutinsLogo.addEventListener("click", function () {
    const content = `
        <h3>Nursery association "les p'tits lutins"</h3>
        <h4>Mission : President</h4>
        <p>I was president of the association at a pivotal moment in its existence. The management and the main financier had become the de facto leaders, excluding the parents elected to the board of directors from any intervention. Wh\
en I took over the presidency, I partly knew the situation, but I was far from imagining the scale of the catastrophe:</p>
        <ul>
          <li>80% of employees planned to resign,</li>
          <li>personnel management too often bordered on illegality,</li>
          <li>the management was likely to constitute moral harassment,</li>
          <li>the main financier (public body) interfered in the management in a completely official manner,</li>
          <li>the association which was to help with management was under the control of the main financier,</li>
          <li>the statutes had been emptied of all substance, leaving only a legal void.</li>
        </ul>
            <p>In short, a real snake's nest...</p>
        <p>My action was a real war, in which my allies were occupational medicine, the labor inspectorate, carsat, lawyers specialized in association law and labor law and the firm that I mandated for a risk diagnosis psychosocial, and\
 last but not least, the employees themselves.</p>
<p>After fierce confrontations, I was able to rewrite the statutes, terminate the director's contract and find a high-quality replacement who was highly appreciated by the team, and put the financier back in his place as financier.</p>
            `;
    assoDescription.innerHTML = content;
  });

  dsdLogo.addEventListener("click", function () {
    console.log("tot");
    const content = `
        <h3>DSD : Développement Solidaire et Durable</h3>
        <h4>Mission : Web developper</h4>
        <p>the association is in the process of changing because it is opening branches in several countries at the same time. We are two web developers to maintain and develop the website.</p>
        <p>We also help interns and volunteers to find them effective tools for remote collaborative work.</p>
          `;
    assoDescription.innerHTML = content;
  });

  avriLogo.addEventListener("click", function () {
    const content = `
              <h3>AVRI : Accompagnement des Victimes du Régime en Iran</h3>
              <h4>Mission : Web developper</h4>
              <p>We are 4 IT specialists working to deploy a secure platform to allow victims of the Iranian regime to make themselves known and provide evidence.</p>
              <p>The notion of security is all the greater as people who use this platform will risk their freedom in the best case scenario.</p>
              <p>Non-exhaustively, this will involve supporting victims of arbitrary arrests, forced disappearances, acts of torture, imprisonment, executions, rapes or even crimes against humanity, crimes of war, genocide.</p>
              `;
    assoDescription.innerHTML = content;
  });
});
