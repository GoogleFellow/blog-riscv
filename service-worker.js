/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5ba4dfeaad8cacceb169dc03d002b6af"
  },
  {
    "url": "assets/css/0.styles.0ce263ec.css",
    "revision": "bb8051f29569d707c129b33e23f072f9"
  },
  {
    "url": "assets/fonts/MathJax_AMS-Regular.07173fb7.woff",
    "revision": "07173fb77d2ee655811499d40c8388e7"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",
    "revision": "bc42125861bd5bfc8686deeb612dcbb3"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",
    "revision": "b80e08d5a79acbd1fafb1ca6f3515664"
  },
  {
    "url": "assets/fonts/MathJax_Main-Bold.c9423d5d.woff",
    "revision": "c9423d5dc9d82a38ca215f74e9cdd9f2"
  },
  {
    "url": "assets/fonts/MathJax_Main-Italic.7e83626b.woff",
    "revision": "7e83626ba8bf2d20dc41565f1e6d0afc"
  },
  {
    "url": "assets/fonts/MathJax_Main-Regular.9995de47.woff",
    "revision": "9995de4787f908d8237dba7007f6c3fe"
  },
  {
    "url": "assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",
    "revision": "77dbcee3c3d9a82a0c04a4ae7992b895"
  },
  {
    "url": "assets/fonts/MathJax_Math-Italic.5589d1a8.woff",
    "revision": "5589d1a8fc62be6613020ef2fa13e410"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Bold.07281897.woff",
    "revision": "07281897a98a61c3733e1670f82a9fd5"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",
    "revision": "3d580bd561716bfb1f0b4fdd7063a802"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",
    "revision": "bc3af04f9a671fcabd6498042c57478f"
  },
  {
    "url": "assets/fonts/MathJax_Script-Regular.4c74e33b.woff",
    "revision": "4c74e33b0feb1fdbda49403a5e7ed604"
  },
  {
    "url": "assets/fonts/MathJax_Typewriter-Regular.72815766.woff",
    "revision": "72815766b08ca24d4d29ad1f5d4ecb45"
  },
  {
    "url": "assets/img/2-1_selector.383bfbb0.jpeg",
    "revision": "383bfbb085c1eeb9b9473ae6f18e97a0"
  },
  {
    "url": "assets/img/8_bit_adder.68cd3891.jpeg",
    "revision": "68cd38910f526c149d232720b82b6ca1"
  },
  {
    "url": "assets/img/address_space_layout_randomization.dbda1bd1.jpeg",
    "revision": "dbda1bd1d43d6fa9d7b552ca57d223b9"
  },
  {
    "url": "assets/img/arp_protocol.6e6dab0f.png",
    "revision": "6e6dab0fff2514677894612462c709ce"
  },
  {
    "url": "assets/img/base_addressing.ce56778e.png",
    "revision": "ce56778ebc9881d1c9db45c44ec6d301"
  },
  {
    "url": "assets/img/BCD_encoding.f5a0b0f2.jpg",
    "revision": "f5a0b0f2188ebe0d18f4424578a588b3"
  },
  {
    "url": "assets/img/branch_prediction.ea82f279.jpeg",
    "revision": "ea82f279b48c10ad95027c91ed62ab5d"
  },
  {
    "url": "assets/img/brash_motor.78e5d626.png",
    "revision": "78e5d626f0a9e18a5fd2434b712edb98"
  },
  {
    "url": "assets/img/brashless_motor.850d54bc.png",
    "revision": "850d54bc1f29f5bb3db7ee53d23803bd"
  },
  {
    "url": "assets/img/cache_coherence.a6146ddd.jpeg",
    "revision": "a6146ddd5c78f2cbc1af56b0ee3292da"
  },
  {
    "url": "assets/img/cache_system.0bb68b0b.png",
    "revision": "0bb68b0bcda593888a0cc797d1735ab5"
  },
  {
    "url": "assets/img/charset_encoding.9911c58d.jpg",
    "revision": "9911c58d79e8a1f106d48a83457d193e"
  },
  {
    "url": "assets/img/cisc_risc.d69a1e75.jpeg",
    "revision": "d69a1e753fa1523df054573f13516277"
  },
  {
    "url": "assets/img/cpu_core_system.99c3127b.png",
    "revision": "99c3127b152a0c83c8c03f4ac719558a"
  },
  {
    "url": "assets/img/CPU_pipeline_overhead.d9e141af.jpeg",
    "revision": "d9e141af3f2c5eedd5aed438388cfe26"
  },
  {
    "url": "assets/img/CPU_pipeline.1e880fa8.jpeg",
    "revision": "1e880fa8b1eab511583267e68f0541ad"
  },
  {
    "url": "assets/img/cpu_registers.cdba5c17.jpg",
    "revision": "cdba5c17a04f0dd5ef05b70368b9a96f"
  },
  {
    "url": "assets/img/csr_register_access_instruction.20cc4af2.png",
    "revision": "20cc4af258e55224b9d6a0aedef7f112"
  },
  {
    "url": "assets/img/csr_register_encoding.43e73e84.png",
    "revision": "43e73e84f64f58165a0a87eceeda90a0"
  },
  {
    "url": "assets/img/D_flip_flop.d749acce.jpeg",
    "revision": "d749acce21756d89c35ee19545cfebbb"
  },
  {
    "url": "assets/img/decoder.4002b5f8.jpeg",
    "revision": "4002b5f8f60a913e655d5268348ee201"
  },
  {
    "url": "assets/img/direct_mapped_cache.522eade5.png",
    "revision": "522eade51bbfad19fd25eb4f3ce80f22"
  },
  {
    "url": "assets/img/dma_chain.5fca630d.png",
    "revision": "5fca630de450c01698ac8265b4f53961"
  },
  {
    "url": "assets/img/dma_engine.54d9bdb7.png",
    "revision": "54d9bdb70a2295e715bd1c7546115846"
  },
  {
    "url": "assets/img/dynamic_link.8cab516a.jpeg",
    "revision": "8cab516a92fd3d7e951887808597094a"
  },
  {
    "url": "assets/img/elf_format.276a740d.jpg",
    "revision": "276a740d0eabf5f4be905fe7326d9fb3"
  },
  {
    "url": "assets/img/esp32_address_table.85ad7d78.png",
    "revision": "85ad7d785bd61aa4cb118f0043b0e85b"
  },
  {
    "url": "assets/img/esp32_external_memory.00b7148f.png",
    "revision": "00b7148f698a82bf10935863900e4886"
  },
  {
    "url": "assets/img/esp32_on_chip_address_table.24c64bff.png",
    "revision": "24c64bffb60d382f37029329d89f1aeb"
  },
  {
    "url": "assets/img/esp32_system_clock.212a5357.png",
    "revision": "212a53578bdae5d21866d16781a2a258"
  },
  {
    "url": "assets/img/esp32_system_structure.70e29ed6.png",
    "revision": "70e29ed6a527c6a0285db28bb7845464"
  },
  {
    "url": "assets/img/ethernet_frame.f4de10c4.png",
    "revision": "f4de10c483aafa9d08f8920858e828ba"
  },
  {
    "url": "assets/img/exception_class.da0117e6.jpeg",
    "revision": "da0117e669ebd2bd06c19beaf12d0da8"
  },
  {
    "url": "assets/img/exception.e8a49f09.jpeg",
    "revision": "e8a49f09d1bb50e4d42fccd14d743ad6"
  },
  {
    "url": "assets/img/float_example_result.9ace5a74.jpeg",
    "revision": "9ace5a7404d1790b03d07bd1b3cb5a27"
  },
  {
    "url": "assets/img/float_example.f9213c43.jpg",
    "revision": "f9213c43f5fa658a2192a68cd26435ae"
  },
  {
    "url": "assets/img/full_adder.3f11f278.jpg",
    "revision": "3f11f278ba8f24209a56fb3ee1ca9e2a"
  },
  {
    "url": "assets/img/gate_circuit.94194480.jpg",
    "revision": "94194480bcfd3b5366e4649ee80de4f6"
  },
  {
    "url": "assets/img/gdb_cheat_sheet.6f7e5433.png",
    "revision": "6f7e54334df820074939f6a5dbb99998"
  },
  {
    "url": "assets/img/gpio_matrix.0bccff5a.png",
    "revision": "0bccff5a741106393e63ab66db51fb45"
  },
  {
    "url": "assets/img/half_adder.5860fd8c.jpg",
    "revision": "5860fd8c4ace079b40e66b9568d2b81e"
  },
  {
    "url": "assets/img/hyper_threading.96aa1220.jpeg",
    "revision": "96aa1220ff27776f55091c55c2eddbc8"
  },
  {
    "url": "assets/img/ieee_float32.914b71bf.jpg",
    "revision": "914b71bf1d85fb6ed76e1135f39b6941"
  },
  {
    "url": "assets/img/image_map.017b48c6.png",
    "revision": "017b48c6656dddd64aed21cad3813ae0"
  },
  {
    "url": "assets/img/immediate_addressing.63c65b49.png",
    "revision": "63c65b493f3567de925bf6559872fd89"
  },
  {
    "url": "assets/img/infrared_modulation_demodulation.f86ad3e6.svg",
    "revision": "f86ad3e629424c9af8a216abb58ec189"
  },
  {
    "url": "assets/img/input_signal_to_peripheral.a9b187b8.png",
    "revision": "a9b187b89174d16d18a803e0112e2183"
  },
  {
    "url": "assets/img/instruction_cycle.bde3548a.jpeg",
    "revision": "bde3548a4789ba49cab74c8c1ab02a67"
  },
  {
    "url": "assets/img/interrupt_matrix.dc37bcbd.png",
    "revision": "dc37bcbdf70db978592e05f56ee47fe8"
  },
  {
    "url": "assets/img/io_mux_pad.671514cc.png",
    "revision": "671514cc44c8b5a394fa3e3a0cced2a8"
  },
  {
    "url": "assets/img/ip_protocol.f8dade33.png",
    "revision": "f8dade3399a1b809f04f3921124d38cf"
  },
  {
    "url": "assets/img/iterator.a7ae1d2a.png",
    "revision": "a7ae1d2a4c8687e67b1f67a0c7af8e86"
  },
  {
    "url": "assets/img/knowledge_map.12bc9800.jpg",
    "revision": "12bc980053ea355a201e2b529048e2ff"
  },
  {
    "url": "assets/img/linear_regression.d67e8d49.png",
    "revision": "d67e8d496f872612aa62e02e4a2bcbaa"
  },
  {
    "url": "assets/img/linker_process.f62da9b2.jpeg",
    "revision": "f62da9b29aa53218f8907851df27f912"
  },
  {
    "url": "assets/img/logistic_regression.4ef370cc.png",
    "revision": "4ef370cc17dbcafcc7091ea024cd56ae"
  },
  {
    "url": "assets/img/lwip_api_message.6f551817.png",
    "revision": "6f55181782841bf71f3f1aa7c953d320"
  },
  {
    "url": "assets/img/lwip_arp_process_input.35e6fc48.png",
    "revision": "35e6fc48d57f6bdd06dcc3e9e7edead8"
  },
  {
    "url": "assets/img/lwip_arp_process_output.999a53be.png",
    "revision": "999a53be718cf8bb3857986a359d349b"
  },
  {
    "url": "assets/img/lwip_arp_reply.59985110.png",
    "revision": "59985110fc7d039a3cb5c11c152a145b"
  },
  {
    "url": "assets/img/lwip_arp_request.7e489783.png",
    "revision": "7e489783ce9afbf4379c3e2ff47718fe"
  },
  {
    "url": "assets/img/lwip_heap.1ac8ef3c.png",
    "revision": "1ac8ef3cd1e40f0272465b615331d63c"
  },
  {
    "url": "assets/img/lwip_icmp_protocol.a19c8c2e.jpg",
    "revision": "a19c8c2e0dfbf7b390f610bc68d0d5b5"
  },
  {
    "url": "assets/img/lwip_ip_frag.c71fe3b0.png",
    "revision": "c71fe3b02e3a1b6896a3a32eed5746bc"
  },
  {
    "url": "assets/img/lwip_ip_input.2eb1bb3b.png",
    "revision": "2eb1bb3bbef845e62bbd254be337b47d"
  },
  {
    "url": "assets/img/lwip_ip_output.a56af61e.png",
    "revision": "a56af61ee032ef9fc2aa137c5c38ead4"
  },
  {
    "url": "assets/img/lwip_memp.1fc0c568.png",
    "revision": "1fc0c56889cac9ecfdf57925e31afa22"
  },
  {
    "url": "assets/img/lwip_packet_message.217126c7.png",
    "revision": "217126c725e129b967094255902f19ba"
  },
  {
    "url": "assets/img/lwip_packets_into_core.85a67ff6.png",
    "revision": "85a67ff6553a1d80caff17436465fa64"
  },
  {
    "url": "assets/img/lwip_pbuf_free_0.f2634715.png",
    "revision": "f263471547a20caf3e0b2ec438161dc0"
  },
  {
    "url": "assets/img/lwip_pbuf_free_1.33781abf.png",
    "revision": "33781abf43d12a922ea4eb1bb2f74828"
  },
  {
    "url": "assets/img/lwip_pbuf_pool.e9801004.png",
    "revision": "e98010044b87e4e7c0ff77af5605c319"
  },
  {
    "url": "assets/img/lwip_pbuf_ram.408a7517.png",
    "revision": "408a7517eeb27554819334a236e3806b"
  },
  {
    "url": "assets/img/lwip_pbuf_rom_ref.64893f56.png",
    "revision": "64893f569acab92710ec71b82dabf036"
  },
  {
    "url": "assets/img/lwip_timeouts_list.51042adb.png",
    "revision": "51042adb1c6c886cfc3878b0bc89594a"
  },
  {
    "url": "assets/img/memory_address_to_cache_line.1313fe1e.png",
    "revision": "1313fe1e4eb3b5c949284c8b215af8d4"
  },
  {
    "url": "assets/img/memory_and_bus.32a8b406.png",
    "revision": "32a8b406d22236061fcb758336ba55b4"
  },
  {
    "url": "assets/img/memory_hierarchy.ab345017.png",
    "revision": "ab345017c3f662b15e15e97e0ca1db0a"
  },
  {
    "url": "assets/img/memory_map.6e8f8541.svg",
    "revision": "6e8f854157f68ded4cbfa11f64108ae0"
  },
  {
    "url": "assets/img/memory_paging.0cf2f08e.png",
    "revision": "0cf2f08e1ceda473df71189334857cf0"
  },
  {
    "url": "assets/img/memory_segmentation.57211af3.png",
    "revision": "57211af3053ed621aeb903433c6c10d1"
  },
  {
    "url": "assets/img/mesi.fa98835c.jpeg",
    "revision": "fa98835c78c879ab69fd1f29193e54d1"
  },
  {
    "url": "assets/img/mips_instruction.b1ade5f8.jpeg",
    "revision": "b1ade5f8de67b172bf7b4ec9f63589bf"
  },
  {
    "url": "assets/img/motor_category.cd3b7f87.png",
    "revision": "cd3b7f87a795775889c64b6404eb3f54"
  },
  {
    "url": "assets/img/multi_level_page_table.61403411.jpeg",
    "revision": "614034116a840ef565feda078d73cb76"
  },
  {
    "url": "assets/img/multiply_example.0615e5e4.jpeg",
    "revision": "0615e5e4406617ee6584adbb929f9571"
  },
  {
    "url": "assets/img/netif_list.73bfcf79.png",
    "revision": "73bfcf7938735b596ec4e2538170a853"
  },
  {
    "url": "assets/img/nonlinear_regression.f58b96b1.png",
    "revision": "f58b96b1b0e08f26bbf8838ad0957776"
  },
  {
    "url": "assets/img/OoOE.153f8d5e.jpeg",
    "revision": "153f8d5e4a4363399133e1d7d9052804"
  },
  {
    "url": "assets/img/operant_forwarding.dceadd35.jpeg",
    "revision": "dceadd35c334974d8270052b37d48c27"
  },
  {
    "url": "assets/img/output_signal_to_pad.06e891ba.png",
    "revision": "06e891bab7649f99f5a1c070de7885c6"
  },
  {
    "url": "assets/img/PC_counter.1ed21092.jpg",
    "revision": "1ed21092022057ed192a7d9aff76144c"
  },
  {
    "url": "assets/img/peripheral_clock.329fd309.png",
    "revision": "329fd3095367667745b5e01c9102bb71"
  },
  {
    "url": "assets/img/pipeline_bubble.0d762f2c.jpeg",
    "revision": "0d762f2ce532d87cfe69c7b167af9c2a"
  },
  {
    "url": "assets/img/plt_got_table.1144d3a2.jpg",
    "revision": "1144d3a2d4f3f4f87c349a93429805c8"
  },
  {
    "url": "assets/img/princeton_harvard.e7508cb4.jpeg",
    "revision": "e7508cb409d398380753b292b6df8391"
  },
  {
    "url": "assets/img/register_addressing.0d72c7c8.png",
    "revision": "0d72c7c824dd7ff34c8c8a9a80f6bd00"
  },
  {
    "url": "assets/img/relative_addressing.e48e0439.png",
    "revision": "e48e043961b987d94d50138b35c41972"
  },
  {
    "url": "assets/img/riscv_alu_design.d2271fee.png",
    "revision": "d2271feebffc5d5334c95b82b2d234ce"
  },
  {
    "url": "assets/img/riscv_alu.b4571647.png",
    "revision": "b4571647545ff79bc38687cfcaa078c9"
  },
  {
    "url": "assets/img/riscv_B_instruction.768409cf.png",
    "revision": "768409cfa8ebce6bc01df289534b8935"
  },
  {
    "url": "assets/img/riscv_data_path.75ca8e0f.png",
    "revision": "75ca8e0f3ddfb83060ba124bb8802965"
  },
  {
    "url": "assets/img/riscv_I_instruction.350f3bc5.png",
    "revision": "350f3bc5906703c13f2aa852100fdf1f"
  },
  {
    "url": "assets/img/riscv_instruction_type.6459e601.png",
    "revision": "6459e601c18056ef475d0d057bff99e6"
  },
  {
    "url": "assets/img/riscv_interrupt_enter.192ffaf5.png",
    "revision": "192ffaf579fd488994cc125262188551"
  },
  {
    "url": "assets/img/riscv_interrupt_exit.16905898.png",
    "revision": "1690589888b0ad1b65b2209433c01055"
  },
  {
    "url": "assets/img/riscv_jump_instruction.53be1f36.png",
    "revision": "53be1f36d4b8aebe72348d44e2794273"
  },
  {
    "url": "assets/img/riscv_load_store_instruction.9677a930.png",
    "revision": "9677a930cd97d64fe48c286a7567554e"
  },
  {
    "url": "assets/img/riscv_R_instruction.4f0a03ae.png",
    "revision": "4f0a03ae7e27ec018676b53a24b78fba"
  },
  {
    "url": "assets/img/riscv_U_instruction.a6d4c422.png",
    "revision": "a6d4c4221d9b33aea1da33fe5307fa0a"
  },
  {
    "url": "assets/img/RS_flip_flop_with_clock.9e9bc411.jpeg",
    "revision": "9e9bc411aa8c7bf2f080f306a0fb8bd8"
  },
  {
    "url": "assets/img/RS_flip_flop.dc6dcce6.jpeg",
    "revision": "dc6dcce612b2fd51939d7ec44b3fe1de"
  },
  {
    "url": "assets/img/sbt_jvm_options.53a2af9f.png",
    "revision": "53a2af9fa1316b81595ea40f95af4685"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/sequent_multiply.cb809de1.jpg",
    "revision": "cb809de19088d08767279715f07482e9"
  },
  {
    "url": "assets/img/setup_lwip.c67664dc.png",
    "revision": "c67664dc461af6d603ec1bc2e3f6a661"
  },
  {
    "url": "assets/img/sigmoid_function.24758bff.png",
    "revision": "24758bffbd6a9a5d243ff226cb1e3306"
  },
  {
    "url": "assets/img/simd.48ddcd5a.jpeg",
    "revision": "48ddcd5ac345091c1be5963d5ef7d7a6"
  },
  {
    "url": "assets/img/simple_page_table.22bb7912.jpeg",
    "revision": "22bb79129f6363ac26be47b35748500f"
  },
  {
    "url": "assets/img/simplest_CPU.6863e10f.jpeg",
    "revision": "6863e10fc635791878d1ecd57618b871"
  },
  {
    "url": "assets/img/spi_signals.2ac41670.png",
    "revision": "2ac4167088ad40da2f88c372545f26b9"
  },
  {
    "url": "assets/img/sram.25c619a6.png",
    "revision": "25c619a683c161d3678c7339aa34d399"
  },
  {
    "url": "assets/img/ssd_lifecycle.966e51db.jpeg",
    "revision": "966e51db8354922b533e1db236337e81"
  },
  {
    "url": "assets/img/ssd_slc.0698c240.jpeg",
    "revision": "0698c240459faa11254932905675dba7"
  },
  {
    "url": "assets/img/ssd_structure.0eee4453.jpeg",
    "revision": "0eee44535a925825b657bcac6afb72d3"
  },
  {
    "url": "assets/img/strapping_pin.5c9a4fda.png",
    "revision": "5c9a4fda6540177c3f7f80d6862a22cc"
  },
  {
    "url": "assets/img/structure_hazard.c2a4c034.jpeg",
    "revision": "c2a4c0340cb835350ea954cdc520704e"
  },
  {
    "url": "assets/img/super_scalar.85f15ec6.jpeg",
    "revision": "85f15ec667d09fd2d368822904029b32"
  },
  {
    "url": "assets/img/tcp_ip_stack.13913b2b.png",
    "revision": "13913b2bf1552065429e62743ba0214c"
  },
  {
    "url": "assets/img/tlb.43205044.jpeg",
    "revision": "432050446f68569a37c7699cccda75d9"
  },
  {
    "url": "assets/img/two_add_instructions.94dda233.jpeg",
    "revision": "94dda2330b07c08530540ae11838c569"
  },
  {
    "url": "assets/img/Von_Neumann_architecture.76984515.jpg",
    "revision": "7698451564f41bad92e81e46e2565cad"
  },
  {
    "url": "assets/img/wear_leveling.6e78f8da.jpeg",
    "revision": "6e78f8da0320dc9b392b9d35ecf42091"
  },
  {
    "url": "assets/img/write_back.67053624.jpeg",
    "revision": "67053624d6aa2a5c27c295e1fda4890d"
  },
  {
    "url": "assets/img/write_through.8b9ad674.jpeg",
    "revision": "8b9ad674953bf36680e815247de235d3"
  },
  {
    "url": "assets/js/10.77b81476.js",
    "revision": "2c3c281c32b54a04b3e392d5d22bbead"
  },
  {
    "url": "assets/js/11.89e87be9.js",
    "revision": "b868ee983f99b1caee07bfcba916756d"
  },
  {
    "url": "assets/js/12.e36c050e.js",
    "revision": "317f4422a7ef0a676f4214ad6828b860"
  },
  {
    "url": "assets/js/13.2c26d33b.js",
    "revision": "999d40d45a7b78dd1e34b82638848309"
  },
  {
    "url": "assets/js/14.5bab27c5.js",
    "revision": "4eb5d2cdd9c149e78026d6e2bb9fcb7c"
  },
  {
    "url": "assets/js/15.7bffd531.js",
    "revision": "65c25d606062782936c32d7a3a115d49"
  },
  {
    "url": "assets/js/16.27589af7.js",
    "revision": "2060ebbac802ff5cfe85b64fa2d8ca5e"
  },
  {
    "url": "assets/js/17.68858ed4.js",
    "revision": "74ec72c43d1063fcbeffdf54e84cafcd"
  },
  {
    "url": "assets/js/18.7c427763.js",
    "revision": "3705bf25949f7801dd2eeea5f6f033f0"
  },
  {
    "url": "assets/js/19.fd516570.js",
    "revision": "a958e3fd738cc871fcff7495d033d672"
  },
  {
    "url": "assets/js/2.b61a4695.js",
    "revision": "fe388f6bb453377133c1b2d230919fe7"
  },
  {
    "url": "assets/js/20.f27ffc90.js",
    "revision": "f7512da816675336d10155e9fbabba9a"
  },
  {
    "url": "assets/js/21.e16e4a70.js",
    "revision": "b53aef3a47e327b36bc614f3e9912459"
  },
  {
    "url": "assets/js/22.8151beb0.js",
    "revision": "bb49707244c5124c56be986bc387c690"
  },
  {
    "url": "assets/js/23.8a939433.js",
    "revision": "bcc313f9cc24b3a3bd7aa29aefb397e7"
  },
  {
    "url": "assets/js/24.c7854ed4.js",
    "revision": "463a3ed2d1f5df294cc42abf7e9e0947"
  },
  {
    "url": "assets/js/25.8820f0ba.js",
    "revision": "f243fcd14623804f82849b032ade70e2"
  },
  {
    "url": "assets/js/26.bc4611da.js",
    "revision": "722517ca5e22db5b333a1478f90cc82c"
  },
  {
    "url": "assets/js/27.10f477da.js",
    "revision": "40a0c048a4696bdabe938d59196a41bb"
  },
  {
    "url": "assets/js/28.9c74ce67.js",
    "revision": "3cae749e40f095154d2a1b9bae24ab47"
  },
  {
    "url": "assets/js/29.bcd07bf3.js",
    "revision": "bd9301ce70df2b888ebf6f57c352d6b0"
  },
  {
    "url": "assets/js/3.6e966895.js",
    "revision": "274239462ad36836caad48cde65db590"
  },
  {
    "url": "assets/js/30.406ed261.js",
    "revision": "99d98aa63728bd072858b202ccb9cd2e"
  },
  {
    "url": "assets/js/31.d3750131.js",
    "revision": "00b7acd6dd848e5fbff579c485fbd95b"
  },
  {
    "url": "assets/js/32.3813f3b6.js",
    "revision": "9cb221f3cdd2116e48012df3e9ce4852"
  },
  {
    "url": "assets/js/33.4d5adf4d.js",
    "revision": "e5aaa9694994fc50fd17f58d5a1eb7e0"
  },
  {
    "url": "assets/js/34.56c7bdf1.js",
    "revision": "d1ae0c03b385658edfa1f0552272d94c"
  },
  {
    "url": "assets/js/35.6cca143c.js",
    "revision": "9eb10c09625d1aa64645cd1cb45dbf67"
  },
  {
    "url": "assets/js/36.f0a37f8d.js",
    "revision": "837761f700b0449b2fb223044c21fa89"
  },
  {
    "url": "assets/js/37.5aa4652e.js",
    "revision": "7795a0350f9f3619f8fd6941bc04a389"
  },
  {
    "url": "assets/js/38.2e08e2f7.js",
    "revision": "09153b4a6680c4216113b8a811d43855"
  },
  {
    "url": "assets/js/39.bb489c40.js",
    "revision": "a8156e157d2dfea93bcce7c7ca1d911a"
  },
  {
    "url": "assets/js/4.e2dd6110.js",
    "revision": "5fcad4e5a363f60ec874e639663e7d8c"
  },
  {
    "url": "assets/js/40.7b2fafcf.js",
    "revision": "f14488c988f1268680a39a55e0fd12cf"
  },
  {
    "url": "assets/js/41.4c37ca02.js",
    "revision": "2caeadc94ea948624efce86663fde924"
  },
  {
    "url": "assets/js/42.3b669d1f.js",
    "revision": "05b811e69f9e35a5b8b329e1d3b5c662"
  },
  {
    "url": "assets/js/43.1b234ac1.js",
    "revision": "5aee191ca924c1d6505b68502278591d"
  },
  {
    "url": "assets/js/44.0aabc92d.js",
    "revision": "f1d5b49032f117f3867ebf198dfc6258"
  },
  {
    "url": "assets/js/45.3f5daf4d.js",
    "revision": "910739fa47fb24471a73979d9fc0ba85"
  },
  {
    "url": "assets/js/46.fd87278e.js",
    "revision": "f4903260d67012536ba7fa12187c25b9"
  },
  {
    "url": "assets/js/47.0d46fdc0.js",
    "revision": "73e2e0b40bbcbb5b2d872590ab11d728"
  },
  {
    "url": "assets/js/48.4d206ca5.js",
    "revision": "39d7a71d15674687761ff2654351a3e5"
  },
  {
    "url": "assets/js/49.374de89a.js",
    "revision": "418dd76b44a3cac7b19021c3a4f1e659"
  },
  {
    "url": "assets/js/5.ccc01b1e.js",
    "revision": "7dc721e008ec845821965fcbaca47bb5"
  },
  {
    "url": "assets/js/50.41501b47.js",
    "revision": "14ca9ffa4256c6512006f16fe8f41a90"
  },
  {
    "url": "assets/js/51.02450634.js",
    "revision": "4791dc2119acae60fd9347a1a56981de"
  },
  {
    "url": "assets/js/52.ca9cce43.js",
    "revision": "f98a62d1453d3724d4fd624b8a7a43fc"
  },
  {
    "url": "assets/js/53.cb510082.js",
    "revision": "3293579b2b92358304932f0f64b2ebb7"
  },
  {
    "url": "assets/js/54.19d6a4f0.js",
    "revision": "bc43e6a7820d9297e236bb5320a32651"
  },
  {
    "url": "assets/js/55.953cb6e2.js",
    "revision": "f46f7848c4aee42f6fe6c00c4b37fbfa"
  },
  {
    "url": "assets/js/56.9800586f.js",
    "revision": "e68c5fae742b29810ea612670a81782d"
  },
  {
    "url": "assets/js/57.1e345ac3.js",
    "revision": "5cb6e12a43d5a0632375c1d2065742d7"
  },
  {
    "url": "assets/js/58.e12cf72b.js",
    "revision": "f22d05e7b13771daf40f625e4ea378e7"
  },
  {
    "url": "assets/js/59.7d047c01.js",
    "revision": "118c5855c219950355735f67f013ec10"
  },
  {
    "url": "assets/js/6.e4016373.js",
    "revision": "65673b7f865f5b95415784a0469f15ca"
  },
  {
    "url": "assets/js/60.35c9923e.js",
    "revision": "8d9885fa13b3ade56e5434f9d4432d50"
  },
  {
    "url": "assets/js/61.c3614fe6.js",
    "revision": "d8a44b6bad57b2ff5cab7a535a0c20b0"
  },
  {
    "url": "assets/js/62.f87248b5.js",
    "revision": "b0c0fbccc93890698f51e5a05d1e926b"
  },
  {
    "url": "assets/js/63.500cd2e5.js",
    "revision": "7d9ba390d4b05e79341ec785a330f6ab"
  },
  {
    "url": "assets/js/64.05d9c30a.js",
    "revision": "7826abf7718535cd4ce73a7bc23c607c"
  },
  {
    "url": "assets/js/65.cd716949.js",
    "revision": "2131692563ce782571fce9532b8394da"
  },
  {
    "url": "assets/js/66.6c5763ca.js",
    "revision": "be19f0adf43c8f97a6f2dce6aa5a3ffc"
  },
  {
    "url": "assets/js/67.cf90dd57.js",
    "revision": "98c22a3dfd65d4d719741e63c061fcb4"
  },
  {
    "url": "assets/js/68.1fd5be5d.js",
    "revision": "04d84ee52a157658538c9f56b2ea6e3c"
  },
  {
    "url": "assets/js/69.02774e9f.js",
    "revision": "6479e7917fa1b358e822c77356a12fb8"
  },
  {
    "url": "assets/js/7.6ce44e3d.js",
    "revision": "5e06e2d075e2cb19b4bc406d032a483a"
  },
  {
    "url": "assets/js/70.3b734725.js",
    "revision": "09726f5070176ff27ae4171d35bf195e"
  },
  {
    "url": "assets/js/71.bab804ac.js",
    "revision": "5393c34a8497dab26bfc79a702941d18"
  },
  {
    "url": "assets/js/72.ebb49fd1.js",
    "revision": "c89588d0bc89ce528d4f4b6efef3a356"
  },
  {
    "url": "assets/js/73.8417d160.js",
    "revision": "0897c660c4a5fb4fce299dbf1e7a208a"
  },
  {
    "url": "assets/js/74.8395495f.js",
    "revision": "558b3b638500e830b1b79a21a5c02d73"
  },
  {
    "url": "assets/js/75.ebb03803.js",
    "revision": "0ac2716cc42c9bb9f08b5d83ef8c7d18"
  },
  {
    "url": "assets/js/76.db0004b1.js",
    "revision": "a1876259df77b4c61b4b4a1e787bc8ab"
  },
  {
    "url": "assets/js/77.a81b5d04.js",
    "revision": "b40f8be8998cfa285a45a99d340aee83"
  },
  {
    "url": "assets/js/78.e38907a7.js",
    "revision": "1b9b7583344279ca40d17dbbe56cbc5a"
  },
  {
    "url": "assets/js/79.b4867cf7.js",
    "revision": "2add1bc65929a0e5d7cc0c9a69b6fdfd"
  },
  {
    "url": "assets/js/8.e6f2958e.js",
    "revision": "cfe2d5c1badf75c2d473063b32306ccd"
  },
  {
    "url": "assets/js/80.d2786fd7.js",
    "revision": "1a187b205c73d3f72843925e2814867a"
  },
  {
    "url": "assets/js/81.ca178da3.js",
    "revision": "79357316af08f711c449a92dc3490c21"
  },
  {
    "url": "assets/js/82.830a294f.js",
    "revision": "906efb6df778bbfd8585383c5a0d2037"
  },
  {
    "url": "assets/js/83.76dc7740.js",
    "revision": "0475028936270386c4a96d6a7d277e14"
  },
  {
    "url": "assets/js/84.dd0d823e.js",
    "revision": "dcc5406dea22fac49e898779f20db2b8"
  },
  {
    "url": "assets/js/85.8c9a6413.js",
    "revision": "9c39a79c0efd2b90d9bbad01516db506"
  },
  {
    "url": "assets/js/9.b8a6079f.js",
    "revision": "ec11947a2a9cd3ae2c80a67de81aa4d9"
  },
  {
    "url": "assets/js/app.77ade106.js",
    "revision": "a656f58b8c8b08f0a8e208a5d0df30af"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "9b98e6860ad55a1340f04eaff607c4c0"
  },
  {
    "url": "cs/bash.html",
    "revision": "863526079719b29148497e97693418e0"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "5ed90e89b79208aad23e0ddd836b43b6"
  },
  {
    "url": "cs/cheat_sheet.html",
    "revision": "5aaf6c45167efcd57a5f650520b7e7db"
  },
  {
    "url": "cs/cmake.html",
    "revision": "5ce913e7f92f93d534c73855272e8643"
  },
  {
    "url": "cs/computer_composition.html",
    "revision": "f319bbbc2ecd201ca2f27809cb4587a1"
  },
  {
    "url": "cs/concurrent_programming.html",
    "revision": "4ec8b603325e31c5d4b4dfff2489410e"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "1dc6e0849c1223b426affa3451e82c63"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "ad8c2bd6edde6bad7727cd42066efb8f"
  },
  {
    "url": "cs/git.html",
    "revision": "5a02c24d81a1ba648d284d9718fc657b"
  },
  {
    "url": "cs/index.html",
    "revision": "47b92804dbdd0307014ac5f75f2900df"
  },
  {
    "url": "cs/iptables.html",
    "revision": "cf5f5d656b07f821e25d71da459a336b"
  },
  {
    "url": "cs/keras.html",
    "revision": "a5dc3d5e19e7f7f3450641957c76a12c"
  },
  {
    "url": "cs/knowledge_map.html",
    "revision": "a0243bab06f8962368f3f063fa6f8e42"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "4b8e0c21f90996aac34d3d1cfd149780"
  },
  {
    "url": "cs/lwip.html",
    "revision": "22bb71dd7480f03603c11b121c160363"
  },
  {
    "url": "cs/mbedtls.html",
    "revision": "ae2d1db356c82ca109cf0ce048a4a604"
  },
  {
    "url": "cs/risc-v.html",
    "revision": "f4b97aaa28268c428ee72a995dfa4e29"
  },
  {
    "url": "cs/scala.html",
    "revision": "b3ed74a88edc80f975b034e51081ce5c"
  },
  {
    "url": "cs/xtensa.html",
    "revision": "2fad18454ef45924fad3ee2ccdeaa0a6"
  },
  {
    "url": "ee/about.html",
    "revision": "8528c8f1df6e3f28c2532ff1079c4123"
  },
  {
    "url": "ee/chisel.html",
    "revision": "d596382dc93cb42b90ca7989d168d123"
  },
  {
    "url": "ee/esp32.html",
    "revision": "f516862d0eb50444e946c34bb070a42f"
  },
  {
    "url": "ee/index.html",
    "revision": "ebbcdd32bc7c408314fc169adea53728"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "c9a3a55baeb97a104a623e729875cac9"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "a1a667cc9514166d9ab2723b1e6fe3d7"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "1c10e5768b37cc0257cf1b16de417f57"
  },
  {
    "url": "favicon.png",
    "revision": "3ad5329b46f55d3cd680401f459a28bc"
  },
  {
    "url": "images/cs/ai/logistic_regression.png",
    "revision": "4ef370cc17dbcafcc7091ea024cd56ae"
  },
  {
    "url": "images/cs/ai/sigmoid_function.png",
    "revision": "24758bffbd6a9a5d243ff226cb1e3306"
  },
  {
    "url": "images/cs/cheat_sheet/gdb_cheat_sheet.png",
    "revision": "6f7e54334df820074939f6a5dbb99998"
  },
  {
    "url": "images/cs/computer_composition/2-1_selector.jpeg",
    "revision": "383bfbb085c1eeb9b9473ae6f18e97a0"
  },
  {
    "url": "images/cs/computer_composition/8_bit_adder.jpeg",
    "revision": "68cd38910f526c149d232720b82b6ca1"
  },
  {
    "url": "images/cs/computer_composition/address_space_layout_randomization.jpeg",
    "revision": "dbda1bd1d43d6fa9d7b552ca57d223b9"
  },
  {
    "url": "images/cs/computer_composition/BCD_encoding.jpg",
    "revision": "f5a0b0f2188ebe0d18f4424578a588b3"
  },
  {
    "url": "images/cs/computer_composition/branch_prediction.jpeg",
    "revision": "ea82f279b48c10ad95027c91ed62ab5d"
  },
  {
    "url": "images/cs/computer_composition/cache_coherence.jpeg",
    "revision": "a6146ddd5c78f2cbc1af56b0ee3292da"
  },
  {
    "url": "images/cs/computer_composition/charset_encoding.jpg",
    "revision": "9911c58d79e8a1f106d48a83457d193e"
  },
  {
    "url": "images/cs/computer_composition/cisc_risc.jpeg",
    "revision": "d69a1e753fa1523df054573f13516277"
  },
  {
    "url": "images/cs/computer_composition/CPU_pipeline_overhead.jpeg",
    "revision": "d9e141af3f2c5eedd5aed438388cfe26"
  },
  {
    "url": "images/cs/computer_composition/CPU_pipeline.jpeg",
    "revision": "1e880fa8b1eab511583267e68f0541ad"
  },
  {
    "url": "images/cs/computer_composition/cpu_registers.jpg",
    "revision": "cdba5c17a04f0dd5ef05b70368b9a96f"
  },
  {
    "url": "images/cs/computer_composition/D_flip_flop.jpeg",
    "revision": "d749acce21756d89c35ee19545cfebbb"
  },
  {
    "url": "images/cs/computer_composition/decoder.jpeg",
    "revision": "4002b5f8f60a913e655d5268348ee201"
  },
  {
    "url": "images/cs/computer_composition/direct_mapped_cache.png",
    "revision": "522eade51bbfad19fd25eb4f3ce80f22"
  },
  {
    "url": "images/cs/computer_composition/dynamic_link.jpeg",
    "revision": "8cab516a92fd3d7e951887808597094a"
  },
  {
    "url": "images/cs/computer_composition/elf_format.jpg",
    "revision": "276a740d0eabf5f4be905fe7326d9fb3"
  },
  {
    "url": "images/cs/computer_composition/exception_class.jpeg",
    "revision": "da0117e669ebd2bd06c19beaf12d0da8"
  },
  {
    "url": "images/cs/computer_composition/exception.jpeg",
    "revision": "e8a49f09d1bb50e4d42fccd14d743ad6"
  },
  {
    "url": "images/cs/computer_composition/float_example_result.jpeg",
    "revision": "9ace5a7404d1790b03d07bd1b3cb5a27"
  },
  {
    "url": "images/cs/computer_composition/float_example.jpg",
    "revision": "f9213c43f5fa658a2192a68cd26435ae"
  },
  {
    "url": "images/cs/computer_composition/full_adder.jpg",
    "revision": "3f11f278ba8f24209a56fb3ee1ca9e2a"
  },
  {
    "url": "images/cs/computer_composition/gate_circuit.jpg",
    "revision": "94194480bcfd3b5366e4649ee80de4f6"
  },
  {
    "url": "images/cs/computer_composition/half_adder.jpg",
    "revision": "5860fd8c4ace079b40e66b9568d2b81e"
  },
  {
    "url": "images/cs/computer_composition/hyper_threading.jpeg",
    "revision": "96aa1220ff27776f55091c55c2eddbc8"
  },
  {
    "url": "images/cs/computer_composition/ieee_float32.jpg",
    "revision": "914b71bf1d85fb6ed76e1135f39b6941"
  },
  {
    "url": "images/cs/computer_composition/instruction_cycle.jpeg",
    "revision": "bde3548a4789ba49cab74c8c1ab02a67"
  },
  {
    "url": "images/cs/computer_composition/knowledge_map.jpg",
    "revision": "12bc980053ea355a201e2b529048e2ff"
  },
  {
    "url": "images/cs/computer_composition/linker_process.jpeg",
    "revision": "f62da9b29aa53218f8907851df27f912"
  },
  {
    "url": "images/cs/computer_composition/memory_address_to_cache_line.png",
    "revision": "1313fe1e4eb3b5c949284c8b215af8d4"
  },
  {
    "url": "images/cs/computer_composition/memory_hierarchy.png",
    "revision": "ab345017c3f662b15e15e97e0ca1db0a"
  },
  {
    "url": "images/cs/computer_composition/memory_paging.png",
    "revision": "0cf2f08e1ceda473df71189334857cf0"
  },
  {
    "url": "images/cs/computer_composition/memory_segmentation.png",
    "revision": "57211af3053ed621aeb903433c6c10d1"
  },
  {
    "url": "images/cs/computer_composition/mesi.jpeg",
    "revision": "fa98835c78c879ab69fd1f29193e54d1"
  },
  {
    "url": "images/cs/computer_composition/mips_instruction.jpeg",
    "revision": "b1ade5f8de67b172bf7b4ec9f63589bf"
  },
  {
    "url": "images/cs/computer_composition/multi_level_page_table.jpeg",
    "revision": "614034116a840ef565feda078d73cb76"
  },
  {
    "url": "images/cs/computer_composition/multiply_example.jpeg",
    "revision": "0615e5e4406617ee6584adbb929f9571"
  },
  {
    "url": "images/cs/computer_composition/OoOE.jpeg",
    "revision": "153f8d5e4a4363399133e1d7d9052804"
  },
  {
    "url": "images/cs/computer_composition/operant_forwarding.jpeg",
    "revision": "dceadd35c334974d8270052b37d48c27"
  },
  {
    "url": "images/cs/computer_composition/PC_counter.jpg",
    "revision": "1ed21092022057ed192a7d9aff76144c"
  },
  {
    "url": "images/cs/computer_composition/pipeline_bubble.jpeg",
    "revision": "0d762f2ce532d87cfe69c7b167af9c2a"
  },
  {
    "url": "images/cs/computer_composition/plt_got_table.jpg",
    "revision": "1144d3a2d4f3f4f87c349a93429805c8"
  },
  {
    "url": "images/cs/computer_composition/princeton_harvard.jpeg",
    "revision": "e7508cb409d398380753b292b6df8391"
  },
  {
    "url": "images/cs/computer_composition/RS_flip_flop_with_clock.jpeg",
    "revision": "9e9bc411aa8c7bf2f080f306a0fb8bd8"
  },
  {
    "url": "images/cs/computer_composition/RS_flip_flop.jpeg",
    "revision": "dc6dcce612b2fd51939d7ec44b3fe1de"
  },
  {
    "url": "images/cs/computer_composition/sequent_multiply.jpg",
    "revision": "cb809de19088d08767279715f07482e9"
  },
  {
    "url": "images/cs/computer_composition/simd.jpeg",
    "revision": "48ddcd5ac345091c1be5963d5ef7d7a6"
  },
  {
    "url": "images/cs/computer_composition/simple_page_table.jpeg",
    "revision": "22bb79129f6363ac26be47b35748500f"
  },
  {
    "url": "images/cs/computer_composition/simplest_CPU.jpeg",
    "revision": "6863e10fc635791878d1ecd57618b871"
  },
  {
    "url": "images/cs/computer_composition/sram.png",
    "revision": "25c619a683c161d3678c7339aa34d399"
  },
  {
    "url": "images/cs/computer_composition/ssd_lifecycle.jpeg",
    "revision": "966e51db8354922b533e1db236337e81"
  },
  {
    "url": "images/cs/computer_composition/ssd_slc.jpeg",
    "revision": "0698c240459faa11254932905675dba7"
  },
  {
    "url": "images/cs/computer_composition/ssd_structure.jpeg",
    "revision": "0eee44535a925825b657bcac6afb72d3"
  },
  {
    "url": "images/cs/computer_composition/structure_hazard.jpeg",
    "revision": "c2a4c0340cb835350ea954cdc520704e"
  },
  {
    "url": "images/cs/computer_composition/super_scalar.jpeg",
    "revision": "85f15ec667d09fd2d368822904029b32"
  },
  {
    "url": "images/cs/computer_composition/tlb.jpeg",
    "revision": "432050446f68569a37c7699cccda75d9"
  },
  {
    "url": "images/cs/computer_composition/two_add_instructions.jpeg",
    "revision": "94dda2330b07c08530540ae11838c569"
  },
  {
    "url": "images/cs/computer_composition/Von_Neumann_architecture.jpg",
    "revision": "7698451564f41bad92e81e46e2565cad"
  },
  {
    "url": "images/cs/computer_composition/wear_leveling.jpeg",
    "revision": "6e78f8da0320dc9b392b9d35ecf42091"
  },
  {
    "url": "images/cs/computer_composition/write_back.jpeg",
    "revision": "67053624d6aa2a5c27c295e1fda4890d"
  },
  {
    "url": "images/cs/computer_composition/write_through.jpeg",
    "revision": "8b9ad674953bf36680e815247de235d3"
  },
  {
    "url": "images/cs/cs.svg",
    "revision": "fe696bfe6c74377d4e9be63e9f170afc"
  },
  {
    "url": "images/cs/design_pattern/iterator.png",
    "revision": "a7ae1d2a4c8687e67b1f67a0c7af8e86"
  },
  {
    "url": "images/cs/keras/linear_regression.png",
    "revision": "d67e8d496f872612aa62e02e4a2bcbaa"
  },
  {
    "url": "images/cs/keras/nonlinear_regression.png",
    "revision": "f58b96b1b0e08f26bbf8838ad0957776"
  },
  {
    "url": "images/cs/lwip/arp_protocol.png",
    "revision": "6e6dab0fff2514677894612462c709ce"
  },
  {
    "url": "images/cs/lwip/ethernet_frame.png",
    "revision": "f4de10c483aafa9d08f8920858e828ba"
  },
  {
    "url": "images/cs/lwip/ip_protocol.png",
    "revision": "f8dade3399a1b809f04f3921124d38cf"
  },
  {
    "url": "images/cs/lwip/lwip_api_message.png",
    "revision": "6f55181782841bf71f3f1aa7c953d320"
  },
  {
    "url": "images/cs/lwip/lwip_arp_process_input.png",
    "revision": "35e6fc48d57f6bdd06dcc3e9e7edead8"
  },
  {
    "url": "images/cs/lwip/lwip_arp_process_output.png",
    "revision": "999a53be718cf8bb3857986a359d349b"
  },
  {
    "url": "images/cs/lwip/lwip_arp_reply.png",
    "revision": "59985110fc7d039a3cb5c11c152a145b"
  },
  {
    "url": "images/cs/lwip/lwip_arp_request.png",
    "revision": "7e489783ce9afbf4379c3e2ff47718fe"
  },
  {
    "url": "images/cs/lwip/lwip_heap.png",
    "revision": "1ac8ef3cd1e40f0272465b615331d63c"
  },
  {
    "url": "images/cs/lwip/lwip_icmp_protocol.jpg",
    "revision": "a19c8c2e0dfbf7b390f610bc68d0d5b5"
  },
  {
    "url": "images/cs/lwip/lwip_ip_frag.png",
    "revision": "c71fe3b02e3a1b6896a3a32eed5746bc"
  },
  {
    "url": "images/cs/lwip/lwip_ip_input.png",
    "revision": "2eb1bb3bbef845e62bbd254be337b47d"
  },
  {
    "url": "images/cs/lwip/lwip_ip_output.png",
    "revision": "a56af61ee032ef9fc2aa137c5c38ead4"
  },
  {
    "url": "images/cs/lwip/lwip_memp.png",
    "revision": "1fc0c56889cac9ecfdf57925e31afa22"
  },
  {
    "url": "images/cs/lwip/lwip_packet_message.png",
    "revision": "217126c725e129b967094255902f19ba"
  },
  {
    "url": "images/cs/lwip/lwip_packets_into_core.png",
    "revision": "85a67ff6553a1d80caff17436465fa64"
  },
  {
    "url": "images/cs/lwip/lwip_pbuf_free_0.png",
    "revision": "f263471547a20caf3e0b2ec438161dc0"
  },
  {
    "url": "images/cs/lwip/lwip_pbuf_free_1.png",
    "revision": "33781abf43d12a922ea4eb1bb2f74828"
  },
  {
    "url": "images/cs/lwip/lwip_pbuf_pool.png",
    "revision": "e98010044b87e4e7c0ff77af5605c319"
  },
  {
    "url": "images/cs/lwip/lwip_pbuf_ram.png",
    "revision": "408a7517eeb27554819334a236e3806b"
  },
  {
    "url": "images/cs/lwip/lwip_pbuf_rom_ref.png",
    "revision": "64893f569acab92710ec71b82dabf036"
  },
  {
    "url": "images/cs/lwip/lwip_timeouts_list.png",
    "revision": "51042adb1c6c886cfc3878b0bc89594a"
  },
  {
    "url": "images/cs/lwip/netif_list.png",
    "revision": "73bfcf7938735b596ec4e2538170a853"
  },
  {
    "url": "images/cs/lwip/setup_lwip.png",
    "revision": "c67664dc461af6d603ec1bc2e3f6a661"
  },
  {
    "url": "images/cs/lwip/tcp_ip_stack.png",
    "revision": "13913b2bf1552065429e62743ba0214c"
  },
  {
    "url": "images/cs/risc-v/base_addressing.png",
    "revision": "ce56778ebc9881d1c9db45c44ec6d301"
  },
  {
    "url": "images/cs/risc-v/csr_register_access_instruction.png",
    "revision": "20cc4af258e55224b9d6a0aedef7f112"
  },
  {
    "url": "images/cs/risc-v/csr_register_encoding.png",
    "revision": "43e73e84f64f58165a0a87eceeda90a0"
  },
  {
    "url": "images/cs/risc-v/immediate_addressing.png",
    "revision": "63c65b493f3567de925bf6559872fd89"
  },
  {
    "url": "images/cs/risc-v/register_addressing.png",
    "revision": "0d72c7c824dd7ff34c8c8a9a80f6bd00"
  },
  {
    "url": "images/cs/risc-v/relative_addressing.png",
    "revision": "e48e043961b987d94d50138b35c41972"
  },
  {
    "url": "images/cs/risc-v/riscv_alu_design.png",
    "revision": "d2271feebffc5d5334c95b82b2d234ce"
  },
  {
    "url": "images/cs/risc-v/riscv_alu.png",
    "revision": "b4571647545ff79bc38687cfcaa078c9"
  },
  {
    "url": "images/cs/risc-v/riscv_B_instruction.png",
    "revision": "768409cfa8ebce6bc01df289534b8935"
  },
  {
    "url": "images/cs/risc-v/riscv_data_path.png",
    "revision": "75ca8e0f3ddfb83060ba124bb8802965"
  },
  {
    "url": "images/cs/risc-v/riscv_I_instruction.png",
    "revision": "350f3bc5906703c13f2aa852100fdf1f"
  },
  {
    "url": "images/cs/risc-v/riscv_instruction_type.png",
    "revision": "6459e601c18056ef475d0d057bff99e6"
  },
  {
    "url": "images/cs/risc-v/riscv_interrupt_enter.png",
    "revision": "192ffaf579fd488994cc125262188551"
  },
  {
    "url": "images/cs/risc-v/riscv_interrupt_exit.png",
    "revision": "1690589888b0ad1b65b2209433c01055"
  },
  {
    "url": "images/cs/risc-v/riscv_jump_instruction.png",
    "revision": "53be1f36d4b8aebe72348d44e2794273"
  },
  {
    "url": "images/cs/risc-v/riscv_load_store_instruction.png",
    "revision": "9677a930cd97d64fe48c286a7567554e"
  },
  {
    "url": "images/cs/risc-v/riscv_R_instruction.png",
    "revision": "4f0a03ae7e27ec018676b53a24b78fba"
  },
  {
    "url": "images/cs/risc-v/riscv_U_instruction.png",
    "revision": "a6d4c4221d9b33aea1da33fe5307fa0a"
  },
  {
    "url": "images/cs/scala/sbt_jvm_options.png",
    "revision": "53a2af9fa1316b81595ea40f95af4685"
  },
  {
    "url": "images/ee/ee.svg",
    "revision": "e0d4275736606674f67f12997b80a8b5"
  },
  {
    "url": "images/ee/esp32/cache_system.png",
    "revision": "0bb68b0bcda593888a0cc797d1735ab5"
  },
  {
    "url": "images/ee/esp32/cpu_core_system.png",
    "revision": "99c3127b152a0c83c8c03f4ac719558a"
  },
  {
    "url": "images/ee/esp32/dma_chain.png",
    "revision": "5fca630de450c01698ac8265b4f53961"
  },
  {
    "url": "images/ee/esp32/dma_engine.png",
    "revision": "54d9bdb70a2295e715bd1c7546115846"
  },
  {
    "url": "images/ee/esp32/esp32_address_table.png",
    "revision": "85ad7d785bd61aa4cb118f0043b0e85b"
  },
  {
    "url": "images/ee/esp32/esp32_external_memory.png",
    "revision": "00b7148f698a82bf10935863900e4886"
  },
  {
    "url": "images/ee/esp32/esp32_on_chip_address_table.png",
    "revision": "24c64bffb60d382f37029329d89f1aeb"
  },
  {
    "url": "images/ee/esp32/esp32_system_clock.png",
    "revision": "212a53578bdae5d21866d16781a2a258"
  },
  {
    "url": "images/ee/esp32/esp32_system_structure.png",
    "revision": "70e29ed6a527c6a0285db28bb7845464"
  },
  {
    "url": "images/ee/esp32/gpio_matrix.png",
    "revision": "0bccff5a741106393e63ab66db51fb45"
  },
  {
    "url": "images/ee/esp32/image_map.png",
    "revision": "017b48c6656dddd64aed21cad3813ae0"
  },
  {
    "url": "images/ee/esp32/input_signal_to_peripheral.png",
    "revision": "a9b187b89174d16d18a803e0112e2183"
  },
  {
    "url": "images/ee/esp32/interrupt_matrix.png",
    "revision": "dc37bcbdf70db978592e05f56ee47fe8"
  },
  {
    "url": "images/ee/esp32/io_mux_pad.png",
    "revision": "671514cc44c8b5a394fa3e3a0cced2a8"
  },
  {
    "url": "images/ee/esp32/memory_and_bus.png",
    "revision": "32a8b406d22236061fcb758336ba55b4"
  },
  {
    "url": "images/ee/esp32/memory_map.svg",
    "revision": "6e8f854157f68ded4cbfa11f64108ae0"
  },
  {
    "url": "images/ee/esp32/output_signal_to_pad.png",
    "revision": "06e891bab7649f99f5a1c070de7885c6"
  },
  {
    "url": "images/ee/esp32/peripheral_clock.png",
    "revision": "329fd3095367667745b5e01c9102bb71"
  },
  {
    "url": "images/ee/esp32/spi_signals.png",
    "revision": "2ac4167088ad40da2f88c372545f26b9"
  },
  {
    "url": "images/ee/esp32/strapping_pin.png",
    "revision": "5c9a4fda6540177c3f7f80d6862a22cc"
  },
  {
    "url": "images/ee/infrared_remote/infrared_modulation_demodulation.svg",
    "revision": "f86ad3e629424c9af8a216abb58ec189"
  },
  {
    "url": "images/ee/infrared_remote/nec_ext_train.png",
    "revision": "2f78d1ce7f001926f6b90ad966796e91"
  },
  {
    "url": "images/ee/infrared_remote/nec_modulation.png",
    "revision": "da33571c6f0afb94b1ec1d91caba3edb"
  },
  {
    "url": "images/ee/infrared_remote/nec_repeat.png",
    "revision": "63364daf21e5522c64eb8dfa82f2cef2"
  },
  {
    "url": "images/ee/infrared_remote/nec_sequence.png",
    "revision": "afea92a3b5cc1aa2457d2b118b157c84"
  },
  {
    "url": "images/ee/infrared_remote/nec_train.png",
    "revision": "f970404e7bbfb5711fea5c776f689f3a"
  },
  {
    "url": "images/ee/motor/brash_motor.png",
    "revision": "78e5d626f0a9e18a5fd2434b712edb98"
  },
  {
    "url": "images/ee/motor/brashless_motor.png",
    "revision": "850d54bc1f29f5bb3db7ee53d23803bd"
  },
  {
    "url": "images/ee/motor/motor_category.png",
    "revision": "cd3b7f87a795775889c64b6404eb3f54"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "7f3f777d138f012a2265d77b10d952f8"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "04dcbd879d05aca11b08e8ccac38a8b0"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "408ea52ae94a10257aec25a4e0d1aa36"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "78eb4441988533905ba97b4f6f379a76"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "3293a2ba7357e53a03a13a85cfc24cd8"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "a5ae50cb2baa927cbc564db72d233038"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "bbfaa6a7ce0ab3899cd13fae0516dabc"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "0fa51e6798434754e980306de7b8c083"
  },
  {
    "url": "images/others/others.svg",
    "revision": "28a34ae59424a4becd8ace3f14b0b58c"
  },
  {
    "url": "images/resume/ai.svg",
    "revision": "f1dafe8922f7dca830e4ea40abe5a814"
  },
  {
    "url": "images/resume/blog.svg",
    "revision": "2132b282a62fdc63ec6084f47feeadca"
  },
  {
    "url": "images/resume/briefcase.svg",
    "revision": "e5b8dfd88d257ef59607ff503b46a890"
  },
  {
    "url": "images/resume/certificate.svg",
    "revision": "e855e283466a7596679860477005b95a"
  },
  {
    "url": "images/resume/electronic.svg",
    "revision": "bbc07af00a040961f7610db77ec955f8"
  },
  {
    "url": "images/resume/envelope.svg",
    "revision": "ce757b0ad4826316f62e2349dc69157d"
  },
  {
    "url": "images/resume/geek.svg",
    "revision": "46552f138017b1941df626e468d77937"
  },
  {
    "url": "images/resume/github.svg",
    "revision": "3fcc2347207e5f9c79a335745ad05d55"
  },
  {
    "url": "images/resume/graduation-cap.svg",
    "revision": "d011739b9d43665bd81607dfeb7290b2"
  },
  {
    "url": "images/resume/hobby.svg",
    "revision": "1958411e2d6842c6ed08302a14c944a1"
  },
  {
    "url": "images/resume/info.svg",
    "revision": "63bd9d622744545ad8854e469e32e497"
  },
  {
    "url": "images/resume/language.svg",
    "revision": "81bb4f03b3167297e7dfa9efc25e242b"
  },
  {
    "url": "images/resume/network.svg",
    "revision": "3769543541ba02f40a922818ea7f9425"
  },
  {
    "url": "images/resume/phone.svg",
    "revision": "5964fd19559cc192308ec5bbc7e24b5b"
  },
  {
    "url": "images/resume/programming.svg",
    "revision": "6ba074a9f3d4d8dad64511a293c7dccf"
  },
  {
    "url": "images/resume/project-diagram.svg",
    "revision": "2c022c0cc22ccdea32ea67668608877b"
  },
  {
    "url": "images/resume/tools.svg",
    "revision": "879de372ee37b73974b6cdb1847c29d8"
  },
  {
    "url": "images/resume/writing.svg",
    "revision": "bbf32bc943b50af3e456a375567a7f03"
  },
  {
    "url": "index.html",
    "revision": "b43136c59d3abd60621e66654bd2b102"
  },
  {
    "url": "others/about.html",
    "revision": "50a71a652bdcd571ec92bf5822b1e885"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "b74e546ec504b70af7886f442937c7a2"
  },
  {
    "url": "others/android-studio.html",
    "revision": "b9e011b8644a250d8a54acd28af579b3"
  },
  {
    "url": "others/android.html",
    "revision": "9933a91c5d0a5cc91084bba6496ea2e2"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "a34849cbb2ab3e7dce33d3d27543d558"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "1446f5f243f6dc7829f52e35f0545d6a"
  },
  {
    "url": "others/css.html",
    "revision": "39f572ee1e77b533cd2ee755ce8973fa"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "254b53e00411d3f34a1c53416ad8281e"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "1ef189903bef22b814c349255794a631"
  },
  {
    "url": "others/english-writting.html",
    "revision": "7699d558e9cb4896423758ebe0f664f2"
  },
  {
    "url": "others/freertos.html",
    "revision": "999a67e3420c23702243a81ebe8f2cb0"
  },
  {
    "url": "others/gns3.html",
    "revision": "227026784a7f12b16f735c5d76c96abb"
  },
  {
    "url": "others/gps.html",
    "revision": "3f465b693968031fb09d85d2203a6d75"
  },
  {
    "url": "others/html5.html",
    "revision": "94f919191d46efa1c63880cc06eba299"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "80f0920d6bf4a603bcc61aed36aef9ef"
  },
  {
    "url": "others/index.html",
    "revision": "0a539c27059bbb23be1a2438ff3983ce"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "a5d87d54fb32e76d6113441993624f20"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "80c0302271922ea71d780b3fccaa14db"
  },
  {
    "url": "others/javascript.html",
    "revision": "7ec492ea390d0077644e63f52b5afbf8"
  },
  {
    "url": "others/json.html",
    "revision": "533bc0366485cc2c608b33ed80ba6477"
  },
  {
    "url": "others/latex.html",
    "revision": "3d8d701419647e57f59386e4b683bf61"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "a7198d334843c16e3418cacae8706aec"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "1587f4ddf8722e8e01060d8face8a689"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "91eb23cdb4402a9ddbe8923ad914358b"
  },
  {
    "url": "others/markdown.html",
    "revision": "f231a45e9be511c7161dceaed784148b"
  },
  {
    "url": "others/matlab.html",
    "revision": "a73c111d877b0a544b4a9b4d8c356e4f"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "478c075b0d6563fb09679240cd53e8d0"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "367641b6a30b45a4e4fe61b75021114e"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "e01363107de31820e86e6a8002e5e88f"
  },
  {
    "url": "others/network-security.html",
    "revision": "2f77c4e9c0f711392301d75e9206eda7"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "5add87f426fe21a2362e7d382efcf82b"
  },
  {
    "url": "others/oral_english.html",
    "revision": "0ba7d0f7b9ab281d03129afca28e4be2"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "6bcff74f27b9a76785cb78834a5f9329"
  },
  {
    "url": "others/poe.html",
    "revision": "a52e23ab8360096ae69d97268d97bb2c"
  },
  {
    "url": "others/pyside2.html",
    "revision": "b8139e7b085dcf2ba6cc2ef82145c5fd"
  },
  {
    "url": "others/python-socket.html",
    "revision": "4c050bdca9c7ae0d8e4c484261ed1c7b"
  },
  {
    "url": "others/python.html",
    "revision": "1af26317a69cb743bacf62dcc0d140eb"
  },
  {
    "url": "others/q-learning.html",
    "revision": "677109a6b49322021ed461d040d6f69b"
  },
  {
    "url": "others/qr-code.html",
    "revision": "38b92841e51031481f6b8f6bf6990ca5"
  },
  {
    "url": "others/qt4.html",
    "revision": "402ce7737741f933269dfe6d3ad19459"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "2b40a38f56a723850521bf56a38e7f00"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "ad5f458239d0ccb681ffb79c0f1266ea"
  },
  {
    "url": "others/sd-card.html",
    "revision": "c52e3445b7760f27fcb44ac35fd03e6f"
  },
  {
    "url": "others/sdn.html",
    "revision": "4611bb3b5619c5d9d9c47a4cf412d1af"
  },
  {
    "url": "others/star-uml.html",
    "revision": "922adb5bc9fb51949d850f4ae1fd3e60"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "704419ea77f63aec6b4bf1972dcd0b57"
  },
  {
    "url": "others/verilog.html",
    "revision": "44c3b9cd67ffe193019bc3118dda64ba"
  },
  {
    "url": "others/vue.html",
    "revision": "b397f53964db4e4159dbf8e0f778749d"
  },
  {
    "url": "others/w5500.html",
    "revision": "5c8350dd8b56d1d953fc355e6b2476e2"
  },
  {
    "url": "others/w7500.html",
    "revision": "7c558a1d7de4a54e648131106531d4a4"
  },
  {
    "url": "resume.html",
    "revision": "2952bd4d72050285000377523e9a66c9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
