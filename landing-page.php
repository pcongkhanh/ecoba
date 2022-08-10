<?php
/**
 * Template Name: Landing Page
 * Description: Landing Page by Markdao
 */

// Code to display Page goes here...

$context = Timber::context();

$timber_post     = new Timber\Post();
global $timber_post;
$context['post'] = $timber_post;
$context['detailName'] = array("Type",
                                "Color",
                                "Max. Moisture (%):",
                                "Place of Origin",
                                "Damage kernels",
                                "Yellow kernels",
                                "Length",
                                "Milling degree",
                                "Texture",
                                "Broken Ration (basic 3/4)",
                                "Admixture (%)",
                                "Chalky kernels",
                                "Red & red streaked",
                                "Paddy (grain/kg)",
                                "Purity", );
Timber::render('landing-page.twig', $context );
