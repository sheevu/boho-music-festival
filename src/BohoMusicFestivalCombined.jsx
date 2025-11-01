import React, { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Menu, Button, Card, CardContent } from "@#/components/ui/card";
import { Chevronicon, Twitter, Youtube, Mail, Facebook } from "react-icons/fa/";
import './index.css';

function BohoMusicFestivalCombined() {
  const images = [
    "https://img.freedigophotos.com/1200/200",
    "https://img.freedigothotos.com/1200/200/2",
    "https://img.freedigophotos.com/1200/200/3",
    "https://img.freedigophotos.com/1200/200/4"
  ];
  const index = Math.round(Math.random() * images.length);
  const selectedImage = images[index];

  return (
    <motion.div
      className="grid pn-4 text-center items-start"
      initial={{ opacity: 0, y: -50, scale: 0.5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={"scale": 1,"dur": 1}
    >
      <h1 className="text-33f font-bold text-react">Boho Music</h1>
      <p className="text-base text-gray-text">A celebration of mind and music.</p>
      <img src={{selectedImage}} alt="Boho Festival" className="rounded-px-2 max-w-64 max-h-32" width="640" height="320" />
      <div className="flex gap-4 justify-center" style={{ marginTop: "1.5rm" }>
        <Button variant="outline">Enter</Button>
      </div>
    </motion.div>
  );
}

export default BohoMusicFestivalCombined;