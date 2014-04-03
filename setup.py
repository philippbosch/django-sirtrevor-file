#!/usr/bin/env python
# -*- coding: utf-8 -*-
try:
    from setuptools import setup
except ImportError:
    from ez_setup import use_setuptools
    use_setuptools()
    from setuptools import setup

setup(
    name='django-sirtrevor-file',
    version= '0.1.0',
    packages=['sirtrevor_file'],
    include_package_data=True,
    license='MIT License',
    description='A file block for django-sirtrevor',
    long_description=open('README.rst', 'r').read(),
    url='https://github.com/philippbosch/django-sirtrevor-file/',
    author='Philipp Bosch',
    author_email='hello@pb.io',
    install_requires=['django-sirtrevor'],
    classifiers=[
        'Environment :: Web Environment',
        'Framework :: Django',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Programming Language :: Python :: 2',
        'Programming Language :: Python :: 2.6',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.3',
        'Topic :: Internet :: WWW/HTTP',
        'Topic :: Internet :: WWW/HTTP :: Dynamic Content',
    ],
)
