import type { CSSProperties } from "react";
import Reveal from "./Reveal";
import { clients } from "../data/cv";

function maskStyle(logo: string, ratio: number): CSSProperties {
	return {
		aspectRatio: ratio,
		"--logo": `url("${logo}")`,
	} as CSSProperties;
}

export default function Clients() {
	const featured = clients.find((c) => c.featured);
	const rest = clients.filter((c) => !c.featured);

	return (
		<section id="clients" className="section clients">
			<div className="section-head">
				<Reveal>
					<span className="section-tag">01 — Clients</span>
				</Reveal>
				<Reveal delay={0.05}>
					<h2 className="section-title">
						Enterprise teams I&rsquo;ve built for.
					</h2>
				</Reveal>
			</div>

			{featured && (
				<Reveal delay={0.1}>
					<div className="client-featured">
						<span className="client-featured-tag">Featured client</span>
						<div className="client-featured-marks">
							<span
								className="client-featured-mark"
								style={maskStyle(featured.logo, featured.ratio)}
								role="img"
								aria-label={featured.name}
							/>
							{featured.via && (
								<span className="client-featured-via">
									{/* <span className="client-featured-via-label">via</span> */}
									<span
										className="client-logo"
										style={maskStyle(featured.via.logo, featured.via.ratio)}
										role="img"
										aria-label={featured.via.name}
									/>
								</span>
							)}
						</div>
						{featured.note && (
							<p className="client-featured-note">{featured.note}</p>
						)}
					</div>
				</Reveal>
			)}

			<Reveal delay={0.15}>
				<div className="client-grid">
					{rest.map((c) => (
						<span
							className="client-logo"
							key={c.name}
							style={maskStyle(c.logo, c.ratio)}
							role="img"
							aria-label={c.name}
						/>
					))}
				</div>
			</Reveal>
		</section>
	);
}
