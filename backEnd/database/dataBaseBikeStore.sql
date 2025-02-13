PGDMP     0                    |            pruebaDB    15.5    15.5 /    .           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            /           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            0           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            1           1262    16686    pruebaDB    DATABASE     �   CREATE DATABASE "pruebaDB" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE "pruebaDB";
                postgres    false            �            1259    16687 	   articulos    TABLE       CREATE TABLE public.articulos (
    id_articulo integer NOT NULL,
    nombre text,
    impuesto numeric(3,2),
    descuento numeric(3,2),
    margen numeric(3,2),
    stock integer,
    costo numeric(15,2),
    url_img text,
    id_categoria integer,
    segunda_desc text
);
    DROP TABLE public.articulos;
       public         heap    postgres    false            �            1259    16692    articulos_id_articulo_seq    SEQUENCE     �   CREATE SEQUENCE public.articulos_id_articulo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.articulos_id_articulo_seq;
       public          postgres    false    214            2           0    0    articulos_id_articulo_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.articulos_id_articulo_seq OWNED BY public.articulos.id_articulo;
          public          postgres    false    215            �            1259    16693 
   categorias    TABLE     \   CREATE TABLE public.categorias (
    id_categoria integer NOT NULL,
    descripcion text
);
    DROP TABLE public.categorias;
       public         heap    postgres    false            �            1259    16698    categorias_id_categoria_seq    SEQUENCE     �   CREATE SEQUENCE public.categorias_id_categoria_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public.categorias_id_categoria_seq;
       public          postgres    false    216            3           0    0    categorias_id_categoria_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public.categorias_id_categoria_seq OWNED BY public.categorias.id_categoria;
          public          postgres    false    217            �            1259    16699 	   det_venta    TABLE     �   CREATE TABLE public.det_venta (
    id_det integer NOT NULL,
    id_articulo integer,
    id_venta integer,
    cantidad integer,
    precio_unit numeric(15,2),
    precio_total numeric(15,2),
    total_reg numeric(15,2)
);
    DROP TABLE public.det_venta;
       public         heap    postgres    false            �            1259    16702    det_venta_id_det_seq    SEQUENCE     �   CREATE SEQUENCE public.det_venta_id_det_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.det_venta_id_det_seq;
       public          postgres    false    218            4           0    0    det_venta_id_det_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.det_venta_id_det_seq OWNED BY public.det_venta.id_det;
          public          postgres    false    219            �            1259    16703    rol    TABLE     c   CREATE TABLE public.rol (
    id_rol integer NOT NULL,
    descripcion text,
    estado boolean
);
    DROP TABLE public.rol;
       public         heap    postgres    false            �            1259    16708    usuarios    TABLE     �   CREATE TABLE public.usuarios (
    id_usuario integer NOT NULL,
    id_rol integer,
    nombre text,
    direccion text,
    correo text,
    telefono integer,
    no_doc integer,
    ciudad text
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false            �            1259    16713    usuarios_id_usuario_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.usuarios_id_usuario_seq;
       public          postgres    false    221            5           0    0    usuarios_id_usuario_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.usuarios_id_usuario_seq OWNED BY public.usuarios.id_usuario;
          public          postgres    false    222            �            1259    16714    ventas    TABLE     �   CREATE TABLE public.ventas (
    id_venta integer NOT NULL,
    precio numeric(15,2),
    fecha date,
    vr_total numeric(15,2),
    id_usuario integer
);
    DROP TABLE public.ventas;
       public         heap    postgres    false            �            1259    16717    ventas_id_venta_seq    SEQUENCE     �   CREATE SEQUENCE public.ventas_id_venta_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.ventas_id_venta_seq;
       public          postgres    false    223            6           0    0    ventas_id_venta_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.ventas_id_venta_seq OWNED BY public.ventas.id_venta;
          public          postgres    false    224            }           2604    16718    articulos id_articulo    DEFAULT     ~   ALTER TABLE ONLY public.articulos ALTER COLUMN id_articulo SET DEFAULT nextval('public.articulos_id_articulo_seq'::regclass);
 D   ALTER TABLE public.articulos ALTER COLUMN id_articulo DROP DEFAULT;
       public          postgres    false    215    214            ~           2604    16719    categorias id_categoria    DEFAULT     �   ALTER TABLE ONLY public.categorias ALTER COLUMN id_categoria SET DEFAULT nextval('public.categorias_id_categoria_seq'::regclass);
 F   ALTER TABLE public.categorias ALTER COLUMN id_categoria DROP DEFAULT;
       public          postgres    false    217    216                       2604    16720    det_venta id_det    DEFAULT     t   ALTER TABLE ONLY public.det_venta ALTER COLUMN id_det SET DEFAULT nextval('public.det_venta_id_det_seq'::regclass);
 ?   ALTER TABLE public.det_venta ALTER COLUMN id_det DROP DEFAULT;
       public          postgres    false    219    218            �           2604    16721    usuarios id_usuario    DEFAULT     z   ALTER TABLE ONLY public.usuarios ALTER COLUMN id_usuario SET DEFAULT nextval('public.usuarios_id_usuario_seq'::regclass);
 B   ALTER TABLE public.usuarios ALTER COLUMN id_usuario DROP DEFAULT;
       public          postgres    false    222    221            �           2604    16722    ventas id_venta    DEFAULT     r   ALTER TABLE ONLY public.ventas ALTER COLUMN id_venta SET DEFAULT nextval('public.ventas_id_venta_seq'::regclass);
 >   ALTER TABLE public.ventas ALTER COLUMN id_venta DROP DEFAULT;
       public          postgres    false    224    223            !          0    16687 	   articulos 
   TABLE DATA           �   COPY public.articulos (id_articulo, nombre, impuesto, descuento, margen, stock, costo, url_img, id_categoria, segunda_desc) FROM stdin;
    public          postgres    false    214   S6       #          0    16693 
   categorias 
   TABLE DATA           ?   COPY public.categorias (id_categoria, descripcion) FROM stdin;
    public          postgres    false    216   p6       %          0    16699 	   det_venta 
   TABLE DATA           r   COPY public.det_venta (id_det, id_articulo, id_venta, cantidad, precio_unit, precio_total, total_reg) FROM stdin;
    public          postgres    false    218   �6       '          0    16703    rol 
   TABLE DATA           :   COPY public.rol (id_rol, descripcion, estado) FROM stdin;
    public          postgres    false    220   �6       (          0    16708    usuarios 
   TABLE DATA           k   COPY public.usuarios (id_usuario, id_rol, nombre, direccion, correo, telefono, no_doc, ciudad) FROM stdin;
    public          postgres    false    221   �6       *          0    16714    ventas 
   TABLE DATA           O   COPY public.ventas (id_venta, precio, fecha, vr_total, id_usuario) FROM stdin;
    public          postgres    false    223   �6       7           0    0    articulos_id_articulo_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.articulos_id_articulo_seq', 1, false);
          public          postgres    false    215            8           0    0    categorias_id_categoria_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.categorias_id_categoria_seq', 1, false);
          public          postgres    false    217            9           0    0    det_venta_id_det_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.det_venta_id_det_seq', 1, false);
          public          postgres    false    219            :           0    0    usuarios_id_usuario_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.usuarios_id_usuario_seq', 1, false);
          public          postgres    false    222            ;           0    0    ventas_id_venta_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.ventas_id_venta_seq', 1, false);
          public          postgres    false    224            �           2606    16724    articulos articulos_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.articulos
    ADD CONSTRAINT articulos_pkey PRIMARY KEY (id_articulo);
 B   ALTER TABLE ONLY public.articulos DROP CONSTRAINT articulos_pkey;
       public            postgres    false    214            �           2606    16726    categorias categorias_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.categorias
    ADD CONSTRAINT categorias_pkey PRIMARY KEY (id_categoria);
 D   ALTER TABLE ONLY public.categorias DROP CONSTRAINT categorias_pkey;
       public            postgres    false    216            �           2606    16728    det_venta det_venta_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.det_venta
    ADD CONSTRAINT det_venta_pkey PRIMARY KEY (id_det);
 B   ALTER TABLE ONLY public.det_venta DROP CONSTRAINT det_venta_pkey;
       public            postgres    false    218            �           2606    16730    rol rol_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.rol
    ADD CONSTRAINT rol_pkey PRIMARY KEY (id_rol);
 6   ALTER TABLE ONLY public.rol DROP CONSTRAINT rol_pkey;
       public            postgres    false    220            �           2606    16732    usuarios usuarios_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id_usuario);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public            postgres    false    221            �           2606    16734    ventas ventas_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.ventas
    ADD CONSTRAINT ventas_pkey PRIMARY KEY (id_venta);
 <   ALTER TABLE ONLY public.ventas DROP CONSTRAINT ventas_pkey;
       public            postgres    false    223            �           2606    16735 %   articulos articulos_id_categoria_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.articulos
    ADD CONSTRAINT articulos_id_categoria_fkey FOREIGN KEY (id_categoria) REFERENCES public.categorias(id_categoria) NOT VALID;
 O   ALTER TABLE ONLY public.articulos DROP CONSTRAINT articulos_id_categoria_fkey;
       public          postgres    false    214    3205    216            �           2606    16740 $   det_venta det_venta_id_articulo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.det_venta
    ADD CONSTRAINT det_venta_id_articulo_fkey FOREIGN KEY (id_articulo) REFERENCES public.articulos(id_articulo) NOT VALID;
 N   ALTER TABLE ONLY public.det_venta DROP CONSTRAINT det_venta_id_articulo_fkey;
       public          postgres    false    3203    218    214            �           2606    16745 !   det_venta det_venta_id_venta_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.det_venta
    ADD CONSTRAINT det_venta_id_venta_fkey FOREIGN KEY (id_venta) REFERENCES public.ventas(id_venta);
 K   ALTER TABLE ONLY public.det_venta DROP CONSTRAINT det_venta_id_venta_fkey;
       public          postgres    false    223    218    3213            �           2606    16750    usuarios usuarios_id_rol_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_id_rol_fkey FOREIGN KEY (id_rol) REFERENCES public.rol(id_rol) NOT VALID;
 G   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_id_rol_fkey;
       public          postgres    false    3209    221    220            �           2606    16755    ventas ventas_id_usuario_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.ventas
    ADD CONSTRAINT ventas_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuarios(id_usuario);
 G   ALTER TABLE ONLY public.ventas DROP CONSTRAINT ventas_id_usuario_fkey;
       public          postgres    false    223    3211    221            !      x������ � �      #      x������ � �      %      x������ � �      '      x������ � �      (      x������ � �      *      x������ � �     