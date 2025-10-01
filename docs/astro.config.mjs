// @ts-check

import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightThemeRapidePlugin from "starlight-theme-rapide";

// https://astro.build/config
export default defineConfig({
	site: "https://fcte-qualidade-de-software-1.github.io",
	integrations: [
		starlight({
			plugins: [starlightThemeRapidePlugin()],
			title: "QSW - Mary Jackson | Análise de Qualidade Pontua",
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/fcte-qualidade-de-software-1/2025-2_T01_MARY-JACKSON",
				},
			],
			sidebar: [
				{
					label: "Início",
					items: [
						{
							label: "Sobre o Projeto",
							slug: "home/sobre",
						},
						{
							label: "Equipe",
							slug: "home/equipe",
						},
					],
				},
				{
					label: "Fases do Projeto",
					items: [
						{
							label: "Fase 1 - Estabelecimento dos Requisitos",
							slug: "fases/fase-1",
						},
					],
				},
			],
		}),
	],
});
