import styles from "./page.module.css";

export default function About() {
    return (
        <main className={styles.root}>
            <div>
                <h1>Why We Sleep</h1>

                <h2>The Biological Necessity of Sleep</h2>

                <p>
                    Sleep isn&apos;t just a state of rest—it&apos;s a complex
                    biological process essential for our survival. Despite
                    comprising roughly one-third of our lives, scientists are
                    still uncovering the full scope of sleep&apos;s purpose.
                    What we do know is that sleep serves as a crucial reset
                    button for our bodies and minds. During these unconscious
                    hours, our brains aren&apos;t simply "turned off" but are
                    actively working to consolidate memories, clear waste
                    products, and restore neural connections. Animals across all
                    species need sleep in some form, and humans who consistently
                    miss sleep face serious health consequences ranging from
                    impaired cognition to increased risk of chronic diseases.
                    Evolution has preserved sleep despite its apparent
                    vulnerability (being unconscious in the wild is risky),
                    suggesting its benefits far outweigh its dangers.
                </p>

                <h2>Sleep&apos;s Role in Mental Performance</h2>

                <p>
                    Our cognitive capabilities depend heavily on quality sleep.
                    During deep sleep stages, the brain processes information
                    gathered throughout the day, strengthening important neural
                    connections while pruning unnecessary ones. This
                    consolidation process transforms fragile short-term memories
                    into more stable long-term ones, explaining why studying
                    right before bedtime can be effective. Beyond memory, sleep
                    significantly impacts our creativity, problem-solving
                    abilities, and emotional regulation. Studies consistently
                    show that well-rested individuals demonstrate better
                    decision-making skills and emotional intelligence.
                    Conversely, sleep deprivation impairs attention, increases
                    impulsivity, and reduces our ability to adapt to new
                    situations—mental penalties equivalent to being legally
                    intoxicated after just one night of poor sleep.
                </p>

                <h2>Physical Restoration and Health Maintenance</h2>

                <p>
                    While we slumber, our bodies undergo essential maintenance
                    and repair processes. Growth hormone is primarily released
                    during deep sleep, facilitating tissue repair and cellular
                    regeneration. The immune system receives a significant boost
                    during sleep, with certain immune cells increasing their
                    production and effectiveness. This explains why proper sleep
                    is crucial when fighting infections. Sleep also plays a
                    vital role in metabolic regulation—chronic sleep deprivation
                    is strongly linked to weight gain, insulin resistance, and
                    increased risk of type 2 diabetes. The cardiovascular system
                    benefits from sleep as well, as blood pressure naturally
                    decreases during sleep, giving the heart and blood vessels a
                    much-needed rest. Perhaps most surprisingly, the brain
                    undergoes a literal cleansing during sleep through the
                    glymphatic system, which removes potentially harmful waste
                    products like beta-amyloid, a protein associated with
                    Alzheimer&apos;s disease.
                </p>
            </div>
        </main>
    );
}
